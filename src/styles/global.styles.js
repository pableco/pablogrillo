import { createGlobalStyle, css, keyframes } from 'styled-components';

import { HIGHLIGHT_ATTR } from '../lib/highlight';

/*
 * El color se mantiene la primera mitad para dar tiempo a que termine el
 * scroll suave — si empezara a apagarse ya, el destino llegaría descolorido.
 */
const highlightFade = (theme) => keyframes`
    0%, 50% {
        background-color: ${theme.main050};
        outline-color: ${theme.main500};
    }
    100% {
        background-color: transparent;
        outline-color: transparent;
    }
`;

const GlobalStyle = createGlobalStyle`
    ${({ theme }) => css`
    /*
        http://meyerweb.com/eric/tools/css/reset/
        v2.0 | 20110126
        License: none (public domain)
        */

        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center, dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video,
        button, input {
            border: 0;
            font: inherit;
            margin: 0;
            padding: 0;
            vertical-align: baseline;
        }

        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
            display: block;
        }

        ol,
        ul {
            list-style: none;
        }

        blockquote,
        q {
            quotes: none;
        }

        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
            content: '';
            content: none;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
        }


        /* APP STYLES */

        * {
            box-sizing: border-box;
            line-height: ${theme.lineHeightB};
        }

        html,
        body {
            background-color: ${theme.colorBg};
            color: ${theme.colorText};
            height: 100%;
        }

        html {
            font-family: ${theme.setBase};
            font-size: ${theme.sizeBase};
        }

        body {
            -webkit-font-smoothing: antialiased;
            font-style: ${theme.styleBase};
            line-height: ${theme.lineHeightB};
        }

        a{
            color: ${theme.colorLink};
            text-decoration: underline;
        }
        a:visited {
            color: ${theme.colorVisited || theme.colorLink};
        }
        a:active {
            color: ${theme.colorActive || theme.colorLink};
        }
        a:hover {
            color: ${theme.colorOver || theme.colorLink};
        }

        img {
            max-width: 100%;
            display: block;
        }

        textarea {
            font-family: inherit;
        }

        svg {
            fill: currentColor;
        }
        mark {
            background-color: ${theme.main050};
        }

        /*
         * Destino de un enlace del chat. Lo pone y lo quita highlight.ts;
         * aquí solo vive el aspecto. El outline (y no un border) porque no
         * ocupa espacio y por tanto no descoloca nada al aparecer.
         */
        [${HIGHLIGHT_ATTR}] {
            animation: ${highlightFade(theme)} 2.4s ease-out;
            border-radius: ${theme.r050};
            outline: ${theme.borderM} solid transparent;
            outline-offset: ${theme.r050};
        }
    `};
`;

export default GlobalStyle;
