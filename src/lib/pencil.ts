/**
 * Trazado a lápiz de la retícula y de la cabecera.
 *
 * Imita un pencil test: 12 fotogramas por segundo, sin curvas de
 * aceleración, y cada fotograma redibujado con un temblor distinto. En las
 * secciones solo se dibujan líneas y el rayado del rail; el texto del CV
 * nunca se anima ni se oculta. La excepción es la cabecera al cargar: el
 * nombre y el subtítulo se escriben a lápiz (ver drawIntro).
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

/**
 * El contorno de una píldora (rectángulo de extremos redondos), empezando
 * abajo a la izquierda y con una pasada de más al final, como quien cierra
 * la forma sin levantar el lápiz.
 */
function pill(x: number, y: number, w: number, h: number, seed: number): Point[] {
    const random = seeded(seed);
    const r = Math.min(h / 2, w / 2);
    const straight = w - 2 * r;
    const perimeter = 2 * straight + 2 * Math.PI * r;
    const count = Math.max(24, Math.round(perimeter / 14));
    const points: Point[] = [];
    for (let i = 0; i <= count * 1.06; i += 1) {
        let d = ((i / count) * perimeter) % perimeter;
        let px: number;
        let py: number;
        if (d < straight) {
            px = x + r + d; py = y + h;
        } else if ((d -= straight) < Math.PI * r) {
            const a = Math.PI / 2 - d / r;
            px = x + w - r + Math.cos(a) * r; py = y + r + Math.sin(a) * r;
        } else if ((d -= Math.PI * r) < straight) {
            px = x + w - r - d; py = y;
        } else {
            d -= straight;
            const a = -Math.PI / 2 - d / r;
            px = x + r + Math.cos(a) * r; py = y + r + Math.sin(a) * r;
        }
        const n = (random() - 0.5) * 2.4;
        points.push([px + n, py + n]);
    }
    return points;
}

/** Rayado a 45° que cubre una caja, en orden aleatorio para que se tupa a mano. */
function hatchLines(x: number, y: number, w: number, h: number, spacing: number, seed: number): Point[][] {
    const lines: Point[][] = [];
    for (let start = x - h; start < x + w + 4; start += spacing) {
        lines.push(wobble([start, y + h + 4], [start + h + 8, y - 4], seed + lines.length, 0.8, 60));
    }
    const random = seeded(seed);
    return lines
        .map((line) => ({ line, key: random() }))
        .sort((a, b) => a.key - b.key)
        .map(({ line }) => line);
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
        if (signal.aborted) {
            resolve();
            return;
        }
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
    progress?: number;
    /** id de un clipPath de `clips` que recorta este trazo. */
    clip?: string;
}

interface Clip {
    id: string;
    x: number;
    y: number;
    w: number;
    h: number;
    rx?: number;
}

/**
 * Dibuja los trazos en el SVG. Cada línea va en dos pasadas, una gruesa y
 * otra fina y desplazada, que es lo que le da textura de grafito.
 */
function render(svg: SVGSVGElement, strokes: Stroke[], frame: number, clips: Clip[] = []): void {
    svg.replaceChildren();
    if (clips.length) {
        const defs = document.createElementNS(SVG_NS, 'defs');
        clips.forEach((clip) => {
            const clipPath = document.createElementNS(SVG_NS, 'clipPath');
            clipPath.setAttribute('id', clip.id);
            const rect = document.createElementNS(SVG_NS, 'rect');
            rect.setAttribute('x', String(clip.x));
            rect.setAttribute('y', String(clip.y));
            rect.setAttribute('width', String(clip.w));
            rect.setAttribute('height', String(clip.h));
            if (clip.rx) rect.setAttribute('rx', String(clip.rx));
            clipPath.appendChild(rect);
            defs.appendChild(clipPath);
        });
        svg.appendChild(defs);
    }
    strokes.forEach((stroke, index) => {
        [
            { width: stroke.width, opacity: 1, jitter: 0.7 },
            { width: stroke.width * 0.55, opacity: 0.5, jitter: 1.8 },
        ].forEach((pass, passIndex) => {
            const d = pathData(stroke.points, stroke.progress ?? 1, frame * 97 + index * 7 + passIndex, pass.jitter);
            if (!d) return;
            const path = document.createElementNS(SVG_NS, 'path');
            path.setAttribute('d', d);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', stroke.color);
            path.setAttribute('stroke-width', String(pass.width));
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            path.setAttribute('opacity', String(pass.opacity));
            if (stroke.clip) path.setAttribute('clip-path', `url(#${stroke.clip})`);
            svg.appendChild(path);
        });
    });
}

/** Los primeros `fraction` (0–1) trazos de un rayado. */
function firstOf(lines: Point[][], fraction: number, color: string, width: number, clip: string): Stroke[] {
    const visible = Math.ceil(Math.max(0, Math.min(1, fraction)) * lines.length);
    return lines.slice(0, visible).map((points) => ({ points, color, width, clip }));
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
    const lineWidth = (parseFloat(getComputedStyle(rail).borderRightWidth) || 2) * 1.2;

    // Un id por sección: con varias dibujándose a la vez, un id compartido
    // haría que todas recortaran con el rail de la primera.
    const clip: Clip = { id: `pencil-rail-${section.id}`, x: railLeft, y: 0, w: railRight - railLeft, h };

    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const lines = [
        wobble([railLeft + 1, 0], [railLeft + 1, h], 11),
        wobble([railRight - 1, 0], [railRight - 1, h], 23),
        wobble([0, h - 1], [w, h - 1], 37),
    ];
    const hatch = hatchLines(clip.x, 0, clip.w, h, 6, 100);
    const line = (points: Point[], progress = 1): Stroke => ({ points, color: lineColor, width: lineWidth, progress });

    await playFrames(7, (frame) => {
        render(svg, [
            line(lines[0], (frame + 1) / 5),
            line(lines[1], (frame - 1) / 4),
            line(lines[2], (frame - 2) / 4),
        ], frame);
    }, signal);

    await playFrames(6, (frame) => {
        render(svg, [
            ...firstOf(hatch, (frame + 1) / 6, hatchColor, 3.4, clip.id),
            ...lines.map((points) => line(points)),
        ], frame, [clip]);
    }, signal);

    svg.replaceChildren();
}

/**
 * La entrada de la página. El nombre y el subtítulo se escriben primero como
 * contorno de lápiz que avanza de izquierda a derecha y después se rellenan
 * rayados; a la vez se trazan los bordes de la cabecera y la píldora del
 * subtítulo. El aspecto del texto en cada fase vive en el CSS de la cabecera
 * (`html[data-pencil-intro]`); aquí solo se mueven las variables.
 */
export async function drawIntro(
    svg: SVGSVGElement,
    header: HTMLElement,
    subtitle: HTMLElement,
    signal: AbortSignal,
): Promise<void> {
    const root = document.documentElement;
    const box = header.getBoundingClientRect();
    const sub = subtitle.getBoundingClientRect();
    const w = box.width;
    const h = box.height;
    const style = getComputedStyle(header);
    const lineColor = style.getPropertyValue('--pencil-line').trim();
    const pillColor = style.getPropertyValue('--pencil-pill').trim();
    const lineWidth = (parseFloat(style.borderBottomWidth) || 2) * 1.2;
    const px = sub.left - box.left;
    const py = sub.top - box.top;
    const clip: Clip = { id: 'pencil-pill', x: px, y: py, w: sub.width, h: sub.height, rx: sub.height / 2 };

    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    const bottom = wobble([0, h - 1], [w, h - 1], 41);
    const right = wobble([w - 1, 0], [w - 1, h], 43);
    const outline = pill(px, py, sub.width, sub.height, 47);
    const hatch = hatchLines(px, py, sub.width, sub.height, 3.5, 200);
    const line = (points: Point[], progress = 1, color = lineColor, width = lineWidth): Stroke => (
        { points, color, width, progress }
    );
    // Cada fotograma cambia la semilla del filtro de temblor del texto.
    const boil = (frame: number) => header.style.setProperty('--intro-boil', `url(#pencil-boil-${frame % 3})`);

    root.dataset.pencilIntro = 'outline';
    await playFrames(12, (frame) => {
        boil(frame);
        header.style.setProperty('--intro-name', `${100 - Math.min(1, (frame + 1) / 9) * 100}%`);
        header.style.setProperty('--intro-subtitle', `${100 - Math.min(1, Math.max(0, frame - 4) / 7) * 100}%`);
        render(svg, [
            line(bottom, (frame + 1) / 8),
            line(right, (frame - 2) / 8),
            line(outline, (frame - 3) / 7, pillColor, 2),
        ], frame);
    }, signal);

    root.dataset.pencilIntro = 'hatch';
    const gaps = [12, 9, 7, 5, 4, 3];
    await playFrames(gaps.length, (frame) => {
        boil(frame);
        header.style.setProperty('--intro-gap', `${gaps[frame]}px`);
        render(svg, [
            ...firstOf(hatch, (frame + 1) / gaps.length, pillColor, 3, clip.id),
            line(bottom),
            line(right),
            line(outline, 1, pillColor, 2),
        ], frame, [clip]);
    }, signal);

    svg.replaceChildren();
    ['--intro-boil', '--intro-name', '--intro-subtitle', '--intro-gap'].forEach((name) => header.style.removeProperty(name));
    delete root.dataset.pencilIntro;
}
