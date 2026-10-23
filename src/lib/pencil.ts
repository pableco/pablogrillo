/**
 * Trazado a lápiz de la retícula de cada sección.
 *
 * Imita un pencil test: 12 fotogramas por segundo, sin curvas de
 * aceleración, y cada fotograma redibujado con un temblor distinto. Solo se
 * dibujan líneas y el rayado del rail; el texto nunca se anima ni se oculta.
 *
 * Se pinta en SVG y no en canvas porque una sección del CV puede medir varios
 * miles de píxeles de alto, y un canvas de ese tamaño a densidad 2x pesa
 * decenas de megas.
 */

const FRAME_MS = 1000 / 12;
const SVG_NS = 'http://www.w3.org/2000/svg';

type Point = [number, number];

/** Aleatorio con semilla: el mismo fotograma tiembla igual si se repite. */
function seeded(seed: number): () => number {
    let s = seed | 0;
    return () => {
        s = (s + 0x6d2b79f5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/** Una recta partida en tramos con un leve desvío perpendicular. */
function wobble(from: Point, to: Point, seed: number, amplitude = 1.4, step = 24): Point[] {
    const random = seeded(seed);
    const [x1, y1] = from;
    const [x2, y2] = to;
    const length = Math.hypot(x2 - x1, y2 - y1) || 1;
    const segments = Math.max(2, Math.round(length / step));
    const nx = -(y2 - y1) / length;
    const ny = (x2 - x1) / length;
    const points: Point[] = [];
    for (let i = 0; i <= segments; i += 1) {
        const t = i / segments;
        const offset = (random() - 0.5) * 2 * amplitude;
        points.push([x1 + (x2 - x1) * t + nx * offset, y1 + (y2 - y1) * t + ny * offset]);
    }
    return points;
}

/** El trazo hasta `progress` (0–1), con un temblor propio de este fotograma. */
function pathData(points: Point[], progress: number, seed: number, jitter: number): string {
    const random = seeded(seed);
    const shake = () => (random() - 0.5) * jitter;
    const last = Math.max(0, Math.min(1, progress)) * (points.length - 1);
    if (last <= 0) return '';
    let d = `M${(points[0][0] + shake()).toFixed(1)} ${(points[0][1] + shake()).toFixed(1)}`;
    for (let i = 1; i <= Math.ceil(last); i += 1) {
        let [x, y] = points[i];
        if (i > last) {
            const f = last - (i - 1);
            const [px, py] = points[i - 1];
            x = px + (x - px) * f;
            y = py + (y - py) * f;
        }
        d += `L${(x + shake()).toFixed(1)} ${(y + shake()).toFixed(1)}`;
    }
    return d;
}

function playFrames(count: number, onFrame: (frame: number) => void, signal: AbortSignal): Promise<void> {
    return new Promise((resolve) => {
        let frame = 0;
        onFrame(frame);
        frame += 1;
        const id = window.setInterval(() => {
            if (signal.aborted || frame >= count) {
                window.clearInterval(id);
                resolve();
                return;
            }
            onFrame(frame);
            frame += 1;
        }, FRAME_MS);
    });
}

interface Stroke {
    points: Point[];
    color: string;
    width: number;
}

/**
 * Dibuja los trazos en el SVG. Cada línea va en dos pasadas, una gruesa y
 * otra fina y desplazada, que es lo que le da textura de grafito.
 */
function render(svg: SVGSVGElement, strokes: Array<Stroke & { progress: number }>, frame: number): void {
    svg.replaceChildren();
    strokes.forEach((stroke, index) => {
        [
            { width: stroke.width, opacity: 1, jitter: 0.7 },
            { width: stroke.width * 0.55, opacity: 0.5, jitter: 1.8 },
        ].forEach((pass, passIndex) => {
            const d = pathData(stroke.points, stroke.progress, frame * 97 + index * 7 + passIndex, pass.jitter);
            if (!d) return;
            const path = document.createElementNS(SVG_NS, 'path');
            path.setAttribute('d', d);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', stroke.color);
            path.setAttribute('stroke-width', String(pass.width));
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            path.setAttribute('opacity', String(pass.opacity));
            svg.appendChild(path);
        });
    });
}

/**
 * Traza los bordes de la sección y del rail, y después rellena el rail con
 * un rayado de su color antes de que la sección recupere su CSS.
 */
export async function drawSection(
    svg: SVGSVGElement,
    section: HTMLElement,
    rail: HTMLElement,
    signal: AbortSignal,
): Promise<void> {
    const box = section.getBoundingClientRect();
    const railBox = rail.getBoundingClientRect();
    const w = box.width;
    const h = box.height;
    const railLeft = railBox.left - box.left;
    const railRight = railBox.right - box.left;
    const style = getComputedStyle(section);
    const lineColor = style.getPropertyValue('--pencil-line').trim();
    const hatchColor = style.getPropertyValue('--section-rail').trim();
    const lineWidth = parseFloat(getComputedStyle(rail).borderRightWidth) || 2;

    // Un id por sección: con varias dibujándose a la vez, un id compartido
    // haría que todas recortaran con el rail de la primera.
    const clipId = `pencil-rail-${section.id}`;

    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const lines: Stroke[] = [
        { points: wobble([railLeft + 1, 0], [railLeft + 1, h], 11), color: lineColor, width: lineWidth * 1.2 },
        { points: wobble([railRight - 1, 0], [railRight - 1, h], 23), color: lineColor, width: lineWidth * 1.2 },
        { points: wobble([0, h - 1], [w, h - 1], 37), color: lineColor, width: lineWidth * 1.2 },
    ];

    // Rayado a 45° dentro del rail, en orden aleatorio para que se vaya
    // tupiendo como a mano y no de un lado al otro.
    const hatch: Stroke[] = [];
    const railWidth = railRight - railLeft;
    for (let x = railLeft - h; x < railRight + 4; x += 6) {
        const from: Point = [x, h + 4];
        const to: Point = [x + h + 8, -4];
        hatch.push({ points: wobble(from, to, 100 + hatch.length, 0.8, 60), color: hatchColor, width: 3.4 });
    }
    const order = hatch.map((_, i) => i).sort((a, b) => seeded(a)() - seeded(b)());

    await playFrames(7, (frame) => {
        render(svg, [
            { ...lines[0], progress: (frame + 1) / 5 },
            { ...lines[1], progress: (frame - 1) / 4 },
            { ...lines[2], progress: (frame - 2) / 4 },
        ], frame);
    }, signal);

    // El rayado solo cubre el rail: lo recorta un clipPath del ancho del rail.
    const frames = 6;
    await playFrames(frames, (frame) => {
        const visible = Math.ceil(((frame + 1) / frames) * order.length);
        render(svg, [
            ...order.slice(0, visible).map((i) => ({ ...hatch[i], progress: 1 })),
            ...lines.map((line) => ({ ...line, progress: 1 })),
        ], frame);
        svg.querySelectorAll('path').forEach((path) => {
            if (path.getAttribute('stroke') === hatchColor) path.setAttribute('clip-path', `url(#${clipId})`);
        });
        const defs = document.createElementNS(SVG_NS, 'defs');
        const clip = document.createElementNS(SVG_NS, 'clipPath');
        clip.setAttribute('id', clipId);
        const rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttribute('x', String(railLeft));
        rect.setAttribute('y', '0');
        rect.setAttribute('width', String(railWidth));
        rect.setAttribute('height', String(h));
        clip.appendChild(rect);
        defs.appendChild(clip);
        svg.prepend(defs);
    }, signal);

    svg.replaceChildren();
}
