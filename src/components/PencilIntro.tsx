import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { drawIntro } from '../lib/pencil';

// Detrás del contenido, como en PencilLines: la cabecera aísla su apilado.
const PencilSvg = styled.svg`
    position: absolute;
    z-index: -1;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
`;

const Filters = styled.svg`
    position: absolute;
    width: 0;
    height: 0;
`;

/**
 * La entrada a lápiz de la cabecera. Un script en _document.js marca
 * `html[data-pencil-intro="pending"]` antes del primer pintado, para que el
 * nombre no se vea entero y luego desaparezca; este componente arranca la
 * animación y quita la marca al terminar. Solo se reproduce en la carga de
 * la página: al cambiar de idioma no hay marca y no hace nada.
 */
export default function PencilIntro() {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const root = document.documentElement;
        const svg = svgRef.current;
        const header = svg?.parentElement;
        const subtitle = header?.querySelector('h2');
        if (root.dataset.pencilIntro !== 'pending') return undefined;
        if (!svg || !header || !subtitle) {
            delete root.dataset.pencilIntro;
            return undefined;
        }

        const controller = new AbortController();
        drawIntro(svg, header, subtitle, controller.signal);

        return () => {
            controller.abort();
            delete root.dataset.pencilIntro;
            svg.replaceChildren();
        };
    }, []);

    return (
        <>
            <PencilSvg ref={svgRef} aria-hidden="true" />
            {/* Tres semillas de temblor que la animación alterna por fotograma. */}
            <Filters aria-hidden="true">
                {[0, 1, 2].map((seed) => (
                    <filter key={seed} id={`pencil-boil-${seed}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves={2} seed={seed + 1} />
                        <feDisplacementMap in="SourceGraphic" scale={2.5} />
                    </filter>
                ))}
            </Filters>
        </>
    );
}
