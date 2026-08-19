import styled, { css } from 'styled-components';
import mediaQueries from '../styles/mediaQueries.styles';

import EmailIcon from './email.svg';
import PhoneIcon from './phone.svg';
import LinkedinIcon from './linkedin.svg';
import BehanceIcon from './be.svg';
import GithubIcon from './github.svg';
import MessageCircleIcon from './message-circle.svg';
import XIcon from './x.svg';
import SendIcon from './send.svg';

const defaultIconProps = css`
    ${({ theme }) => css`
        height: 2em;
        width: 2em;
        border-radius: ${theme.round};
        margin-right: 0.5em;
    `};
`;

const Email = styled(EmailIcon)`
    ${defaultIconProps}
`;

const Phone = styled(PhoneIcon)`
    ${defaultIconProps}
`;

const Linkedin = styled(LinkedinIcon)`
    ${defaultIconProps}
`;

const Behance = styled(BehanceIcon)`
    ${defaultIconProps}
`;

const Github = styled(GithubIcon)`
    ${defaultIconProps}
`;

// Sin defaultIconProps: estos no son iconos de lista con texto al lado,
// se dimensionan y colorean en el punto de uso (ver Chat.styles.ts).
// Son iconos de trazo (Feather): pisan el "fill: currentColor" global,
// que los rellenaría en vez de dejarlos solo con el borde.
const strokeIconProps = css`
    fill: none;
    stroke: currentColor;
`;

const MessageCircle = styled(MessageCircleIcon)`
    ${strokeIconProps}
`;
const Close = styled(XIcon)`
    ${strokeIconProps}
`;
const Send = styled(SendIcon)`
    ${strokeIconProps}
`;

const WrapperDown = styled.div`
    ${({ theme, visible }) => css`
        fill: none;
        height: ${theme.iconsSizeML};
        margin: 0 auto;
        opacity: ${visible ? 1 : 0};
        transition: opacity ${theme.animationTimeM} ease-in-out;
        width: ${theme.iconsSizeML};
    `};
`;


export {
    Behance,
    Close,
    Email,
    Github,
    Linkedin,
    MessageCircle,
    Phone,
    Send,
    WrapperDown,
}
