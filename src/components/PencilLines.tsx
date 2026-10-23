import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { drawSection } from '../lib/pencil';

// Detrás del contenido: la sección aísla su apilado (ver layout.styles.js),
// así el z-index negativo queda sobre su fondo pero bajo el texto.
const PencilSvg = styled.svg`
    position: absolute;
    z-index: -1;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
`;

/**
 * Va dentro de una sección y le dibuja la retícula a lápiz la primera vez
 * que entra en pantalla. Mientras espera, la sección esconde sus bordes y el
 * fondo del rail con `data-pencil="pending"` (ver layout.styles.js); el
 * texto sigue visible en todo momento.
 *
 * Sin JavaScript, o con movimiento reducido, la sección se queda tal cual.
 */
export default function PencilLines() {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        const section = svg?.parentElement;
        const rail = section?.firstElementChild;
        if (!svg || !section || !(rail instanceof HTMLElement)) return undefined;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

        const controller = new AbortController();
        section.dataset.pencil = 'pending';

        // Sin umbral de proporción: una sección puede ser varias veces más
        // alta que la pantalla y nunca llegaría a mostrarse en un 20 %.
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            drawSection(svg, section, rail, controller.signal).then(() => {
                if (!controller.signal.aborted) section.dataset.pencil = 'done';
            });
        }, { rootMargin: '0px 0px -20% 0px' });
        observer.observe(section);

        return () => {
            controller.abort();
            observer.disconnect();
            delete section.dataset.pencil;
            svg.replaceChildren();
        };
    }, []);

    return <PencilSvg ref={svgRef} aria-hidden="true" />;
}
