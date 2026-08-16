import styled, { css, keyframes } from 'styled-components';

import mediaQueries from '../../styles/mediaQueries.styles';

const PANEL_WIDTH = '38rem';
const PANEL_HEIGHT = '58rem';

const OPEN_TRANSITION = '.2s ease-in-out';

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
        border-radius: ${$open ? 0 : theme.r200};
        bottom: ${$open ? 0 : theme.r200};
        box-shadow: ${theme.boxShadowBottom4};
        display: flex;
        flex-direction: column;
        height: ${$open ? '100dvh' : theme.iconDefaultSize};
        overflow: hidden;
        position: fixed;
        right: ${$open ? 0 : theme.r200};
        transition: ${OPEN_TRANSITION};
        transition-property: border-radius, bottom, height, right, width;
        width: ${$open ? '100vw' : `min(${PANEL_WIDTH}, calc(100vw - ${theme.r400}))`};
        z-index: ${theme.zModal};

        @media ${mediaQueries.tablet} {
            border: ${theme.borderM} solid ${theme.neutral900};
            border-radius: ${theme.r200};
            bottom: ${theme.r300};
            height: ${$open ? `min(${PANEL_HEIGHT}, 75vh)` : theme.iconDefaultSize};
            right: ${theme.r300};
            width: min(${PANEL_WIDTH}, calc(100vw - ${theme.r400}));
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

export const Header = styled.header`
    ${({ theme }) => css`
        align-items: center;
        background: ${theme.neutral700};
        color: ${theme.neutral050};
        display: flex;
        flex: none;
        justify-content: space-between;
        padding: ${theme.r150} ${theme.r200};
    `};
`;

export const Title = styled.p`
    ${({ theme }) => css`
        font-size: ${theme.b1};
        font-weight: ${theme.bold};
        letter-spacing: ${theme.letterb};
        margin: 0;
        text-transform: uppercase;
    `};
`;

export const ToggleButton = styled.button`
    ${({ theme }) => css`
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        display: flex;
        flex: none;
        padding: ${theme.r025};

        svg {
            height: ${theme.iconsSizeS};
            width: ${theme.iconsSizeS};
        }

        &:focus-visible {
            outline: ${theme.borderS} solid ${theme.neutral050};
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
