import styled from 'styled-components';

import theme from './theme';
import mediaQueries from './mediaQueries.styles';

const H1 = styled.h1`
    font-size: 3rem;
    @media ${mediaQueries.mobileL} {
        font-size: 4rem;
    }
    @media ${mediaQueries.tablet} {
        font-size: 5rem;
    }
    @media ${mediaQueries.laptopL} {
        font-size: 7rem;
    }
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.2rem;
    margin: 1rem 0;
    color: ${theme.colors.light};
`;

const H2 = styled.h2`
    font-size: 1.4rem;
    @media ${mediaQueries.mobileL} {
        font-size: 1.6rem;
    }
    @media ${mediaQueries.tablet} {
        font-size: 1.8rem;
    }
    line-height: 1.2;
    font-weight: 400;
    letter-spacing: -0.05rem;
    margin: 0 0 1rem 0;
`;

const H3 = styled.h3`
    font-size: 1.8rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
`;

const H4 = styled.h4`
    font-size: 1.1rem;
    line-height: 1.4;
    margin: .5rem 0 .5rem;
    font-weight: 400;
`;

const H5 = styled.h5`
    font-size: 1.2rem;
    line-height: 1.5;
`;

const P = styled.p`
    margin: 0;
`;

const A = styled.a`
    &,
    &:active{
        color: ${theme.colors.neutral000};
        text-decoration: underline;
    }
    &:hover{
        color: ${theme.colors.neutral200};
        text-decoration: none;
    }
`;


const Typo = {
    H1,
    H2,
    H3,
    H4,
    H5,
    P,
    A,
};

export default Typo;
