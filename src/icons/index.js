import styled, { css } from 'styled-components';
import theme from '../styles/theme';

import EmailIcon from './email.svg';
import PhoneIcon from './phone.svg';
import LinkedinIcon from './linkedin.svg';
import BehanceIcon from './behance.svg';
import GithubIcon from './github.svg';

const defaultIconProps = css`
    height: 1.5em;
    width: 1.5em;
    border: ${theme.borderS} solid currentColor;
    border-radius: ${theme.round};
    margin-right: 0.5em;
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


export {
    Email,
    Phone,
    Linkedin,
    Behance,
    Github,
}
