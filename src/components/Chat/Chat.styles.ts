import styled, { css, keyframes } from 'styled-components';

import mediaQueries from '../../styles/mediaQueries.styles';

const PANEL_WIDTH = '38rem';
const PANEL_HEIGHT = '58rem';

/* Barra colapsada: pastilla de tamaño fijo. El radio iguala la altura
   para que los extremos queden completamente redondeados. */
const BAR_WIDTH = '26rem';
const BAR_HEIGHT = '5rem';

const OPEN_TRANSITION = '.2s ease-in-out';

/* Toda la barra es el botón que abre/cierra el chat: un <p> y un
   icono sueltos solo eran clicables en su propia caja, dejando el
   resto de la franja muerta al tacto/clic. */
export const Header = styled.button`
    ${({ theme }) => css`
        align-items: center;
        background: ${theme.neutral700};
        border: none;
        color: ${theme.neutral050};
        cursor: pointer;
        display: flex;
        flex: none;
        font: inherit;
        justify-content: space-between;
        /* Sin padding vertical: la altura la fija min-height y el
           contenido se centra solo, sin depender del interlineado. */
        min-height: ${BAR_HEIGHT};
        padding: 0 ${theme.r200};
        text-align: left;
        width: 100%;

        &:focus-visible {
            outline: ${theme.borderS} solid ${theme.neutral050};
            outline-offset: -${theme.borderM};
        }
    `};
`;

export const Panel = styled.div<{ $open: boolean }>`
    ${({ theme, $open }) => css`
        /* El panel es siempre la misma caja: cerrado, se ve solo la
           cabecera; al abrir, crece hacia arriba/lados sin moverse de
           sitio, así el chat se despliega bajo el propio botón. Móvil
           primero: pantalla completa al abrir — ver riesgo #5 del plan,
           una burbuja flotante taparía el contenido en pantallas
           pequeñas. */
        background: ${theme.colorBg};
        border: 0;
        border-radius: ${$open ? 0 : BAR_HEIGHT};
        bottom: ${$open ? 0 : theme.r200};
        box-shadow: ${theme.boxShadowBottom4};
        display: flex;
        flex-direction: column;
        height: ${$open ? '100dvh' : BAR_HEIGHT};
        overflow: hidden;
        position: fixed;
        right: ${$open ? 0 : theme.r200};
        transition: ${OPEN_TRANSITION};
        transition-property: border-radius, bottom, height, right, width;
        width: ${$open ? '100vw' : `min(${BAR_WIDTH}, calc(100vw - ${theme.r400}))`};
        z-index: ${theme.zModal};

        ${!$open &&
        css`
            /* Colapsado la cabecera es lo único visible: que ocupe todo
               el alto real de la pastilla — descontando el borde, que
               resta al box interior — y no deje ver el fondo del panel. */
            ${Header} {
                min-height: 100%;
            }
        `};

        @media ${mediaQueries.tablet} {
            border: ${theme.borderM} solid ${theme.neutral900};
            border-radius: ${$open ? theme.r200 : BAR_HEIGHT};
            bottom: ${theme.r300};
            height: ${$open ? `min(${PANEL_HEIGHT}, 75vh)` : BAR_HEIGHT};
            right: ${theme.r300};
            width: ${$open ? `min(${PANEL_WIDTH}, calc(100vw - ${theme.r400}))` : BAR_WIDTH};
        }
    `};
`;

export const Body = styled.div`
    ${css`
        display: flex;
        flex: 1;
        flex-direction: column;
        min-height: 0;
        overflow: hidden;
    `};
`;

// span, no p: vive dentro de un <button> y <p> no es contenido de fraseo
// (el modelo de contenido de <button> solo admite ese tipo de hijos).
export const Title = styled.span`
    ${({ theme }) => css`
        font-size: ${theme.b1};
        font-weight: ${theme.bold};
        letter-spacing: ${theme.letterb};
        margin: 0;
        text-transform: uppercase;
    `};
`;

export const ToggleIcon = styled.span`
    ${({ theme }) => css`
        align-items: center;
        display: flex;
        flex: none;
        justify-content: center;

        svg {
            height: ${theme.iconsSizeS};
            width: ${theme.iconsSizeS};
        }
    `};
`;

export const MessageList = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: ${theme.r150};
        overflow-y: auto;
        padding: ${theme.r200};
    `};
`;

export const MessageBubble = styled.div<{ $role: 'user' | 'assistant' }>`
    ${({ theme, $role }) => css`
        background: ${$role === 'user' ? theme.main500 : theme.neutral100};
        border-radius: ${theme.r150};
        color: ${$role === 'user' ? theme.neutral050 : theme.colorText};
        font-size: ${theme.b2};
        line-height: ${theme.lhB};
        max-width: 85%;
        padding: ${theme.r075} ${theme.r150};
        ${$role === 'user'
            ? css`
                  align-self: flex-end;
                  border-bottom-right-radius: ${theme.r025};
              `
            : css`
                  align-self: flex-start;
                  border-bottom-left-radius: ${theme.r025};
              `};

        p {
            margin: 0 0 ${theme.r075};

            &:last-child {
                margin-bottom: 0;
            }
        }

        a {
            color: ${$role === 'user' ? theme.neutral050 : theme.colorLink};
            text-decoration: underline;
        }
    `};
`;

const bounce = keyframes`
    0%, 80%, 100% {
        opacity: 0.3;
        transform: translateY(0);
    }
    40% {
        opacity: 1;
        transform: translateY(-0.2rem);
    }
`;

export const TypingIndicator = styled.div`
    ${({ theme }) => css`
        align-self: flex-start;
        background: ${theme.neutral100};
        border-bottom-left-radius: ${theme.r025};
        border-radius: ${theme.r150};
        display: flex;
        gap: ${theme.r025};
        padding: ${theme.r100} ${theme.r150};

        span {
            animation: ${bounce} 1.2s infinite ease-in-out;
            background: ${theme.neutral500};
            border-radius: 50%;
            display: block;
            height: ${theme.r050};
            width: ${theme.r050};

            &:nth-child(2) {
                animation-delay: 0.15s;
            }

            &:nth-child(3) {
                animation-delay: 0.3s;
            }
        }
    `};
`;

export const EmptyState = styled.div`
    ${({ theme }) => css`
        color: ${theme.colorTextSecondary};
        display: flex;
        flex-direction: column;
        gap: ${theme.r150};
        font-size: ${theme.b2};
        margin: auto 0;
        text-align: center;
    `};
`;

export const SuggestionList = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: ${theme.r075};
    `};
`;

export const SuggestionChip = styled.button`
    ${({ theme }) => css`
        background: ${theme.neutral100};
        border: none;
        border-radius: ${theme.round};
        color: ${theme.colorText};
        cursor: pointer;
        font-size: ${theme.b2};
        padding: ${theme.r075} ${theme.r150};
        text-align: left;

        &:hover {
            background: ${theme.neutral200};
        }

        &:focus-visible {
            outline: ${theme.borderS} solid ${theme.main500};
        }
    `};
`;

export const ErrorBanner = styled.div`
    ${({ theme }) => css`
        align-items: center;
        background: ${theme.danger100};
        color: ${theme.danger700};
        display: flex;
        flex: none;
        font-size: ${theme.b2};
        gap: ${theme.r100};
        justify-content: space-between;
        padding: ${theme.r075} ${theme.r200};
    `};
`;

export const RetryButton = styled.button`
    ${({ theme }) => css`
        background: none;
        border: none;
        color: ${theme.danger700};
        cursor: pointer;
        flex: none;
        font-weight: ${theme.bold};
        text-decoration: underline;
    `};
`;

export const InputForm = styled.form`
    ${({ theme }) => css`
        align-items: flex-end;
        border-top: ${theme.borderS} solid ${theme.neutral200};
        display: flex;
        flex: none;
        gap: ${theme.r100};
        padding: ${theme.r150};
    `};
`;

export const TextArea = styled.textarea`
    ${({ theme }) => css`
        background: ${theme.neutral000};
        border: ${theme.borderS} solid ${theme.neutral200};
        border-radius: ${theme.r100};
        color: ${theme.colorText};
        flex: 1;
        font-family: inherit;
        font-size: ${theme.b2};
        height: ${theme.iconDefaultSize};
        line-height: ${theme.lhB};
        max-height: 12rem;
        /* Centra verticalmente la línea de texto dentro de la altura fija:
           reparte lo que sobra tras la línea de texto y los bordes entre
           el padding superior e inferior. */
        padding: calc((${theme.iconDefaultSize} - ${theme.lhB} * ${theme.b2} - 2 * ${theme.borderS}) / 2) ${theme.r100};
        resize: none;

        &:focus-visible {
            border-color: ${theme.main500};
            outline: none;
        }

        &:disabled {
            background: ${theme.neutral050};
            color: ${theme.colorTextSecondary};
        }
    `};
`;

export const SendButton = styled.button`
    ${({ theme }) => css`
        align-items: center;
        background: ${theme.main500};
        border: none;
        border-radius: ${theme.round};
        color: ${theme.neutral050};
        cursor: pointer;
        display: flex;
        flex: none;
        height: ${theme.iconDefaultSize};
        justify-content: center;
        width: ${theme.iconDefaultSize};

        svg {
            height: ${theme.iconsSizeS};
            width: ${theme.iconsSizeS};
        }

        &:disabled {
            background: ${theme.neutral300};
            cursor: not-allowed;
        }

        &:focus-visible {
            outline: ${theme.borderM} solid ${theme.main700};
            outline-offset: ${theme.r025};
        }
    `};
`;
