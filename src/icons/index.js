import styled, { css } from 'styled-components';
import mediaQueries from '../styles/mediaQueries.styles';

import EmailIcon from './email.svg';
import PhoneIcon from './phone.svg';
import LinkedinIcon from './linkedin.svg';
import BehanceIcon from './be.svg';
import GithubIcon from './github.svg';

const defaultIconProps = css`
    ${({ theme }) => css`
        height: 1.5em;
        width: 1.5em;
        border: ${theme.borderS} solid currentColor;
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
    WrapperDown,
    Email,
    Github,
    Linkedin,
    Phone,
}
