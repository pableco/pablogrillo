/**
 * Resaltado del contenido al que apunta un enlace del chat.
 *
 * El chat responde citando anclas de la página (`[Roiback](#work-roiback-2023)`).
 * Al pulsarlas no basta con saltar: el visitante aterriza en mitad de un CV
 * denso sin saber qué parte le estaban señalando. Marcamos el destino con un
 * atributo y `global.styles.js` se encarga de teñirlo y desvanecerlo.
 */

/** Lo lee el selector de global.styles.js — cámbialo en los dos sitios. */
export const HIGHLIGHT_ATTR = 'data-chat-highlight';

/**
 * Lleva la vista al elemento y lo resalta. Devuelve `false` si el ancla no
 * existe, para que quien llame pueda dejar que el navegador haga lo suyo en
 * vez de tragarse el clic.
 */
export function highlightTarget(id: string): boolean {
    const target = document.getElementById(id);
    if (!target) return false;

    const stillMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: stillMotion ? 'auto' : 'smooth', block: 'center' });

    // Quitar y volver a poner el atributo reinicia la animación: sin esto,
    // pulsar dos veces el mismo enlace no resaltaría la segunda vez.
    target.removeAttribute(HIGHLIGHT_ATTR);
    void target.offsetWidth;
    target.setAttribute(HIGHLIGHT_ATTR, '');

    target.addEventListener(
        'animationend',
        () => target.removeAttribute(HIGHLIGHT_ATTR),
        { once: true },
    );

    return true;
}
