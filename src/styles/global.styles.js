import { createGlobalStyle } from 'styled-components';

import theme from './theme';
import mediaQueries from './mediaQueries.styles';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
        Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        line-height: 1.6;
        font-size: 16px;
        color: ${theme.colors.default};
        font-weight: 100;
        background-color: ${theme.colors.primaryBg};
        background-image: url(${theme.background.body});
        background-position: 100% 0;
        background-size: 6.7rem 19.0rem;
        @media ${mediaQueries.mobileL} {
            background-size: 9.2rem 26.1rem;
        }
        @media ${mediaQueries.tablet} {
            background-size: 12.5rem 35.4rem;
        }
        @media ${mediaQueries.laptopL} {
            background-size: 15.3rem 43.4rem;
        }
        background-repeat: repeat-y;
    }

    * {
        box-sizing: border-box;
    }

    a {
        color: ${theme.colors.primary};
    }

    a:hover {
        text-decoration: underline;
    } 

    img {
        max-width: 100%;
        display: block;
    }

    h1,
    h2,
    h3 {
        font-weight: 800;
    }
    
    textarea {
        font-family: inherit;
    }
`;

export default GlobalStyle;
