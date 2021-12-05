import styled, { css } from 'styled-components';
import mediaQueries from './mediaQueries.styles';

const Name = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.h4};
        /* @media ${mediaQueries.mobileL} {
            font-size: ${theme.h3};
        }
        @media ${mediaQueries.tablet} {
            font-size: ${theme.h2};
        }
        @media ${mediaQueries.laptopL} {
            font-size: ${theme.h1};
        } */
        margin: ${theme.r010} 0 0;
        font-weight: 100;
        letter-spacing: ${theme.letterb1};
        text-transform: uppercase;
        text-align: center;
    `};
`;

const Title = styled.h2`
    ${({ theme }) => css`
        border-radius: ${theme.round};
        border: ${theme.borderS} solid ${theme.neutral900};
        font-size: ${theme.small};
        font-weight: 400;
        letter-spacing: ${theme.letterb};
        margin: 0 0 ${theme.r100} 0;
        padding: .25rem .75rem .1rem;
        text-align: center;
        text-transform: uppercase;

        /* @media ${mediaQueries.mobileL} {
            font-size: 1rem;
        }
        @media ${mediaQueries.tablet} {
            font-size: 1rem;
        } */
    `};
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
    ${({ theme }) => css`
        font-size: ${theme.h5};
        line-height: 1;
        font-weight: ${theme.regular};
        letter-spacing: ${theme.lsh6};
        margin: 1rem 0;
        text-transform: uppercase;
    `};
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
    ${({ theme }) => css`
        font-size: ${theme.b1};
        font-weight: 100;
        letter-spacing: ${theme.ls};
        margin: 0;
    `};
`;

const A = styled.a`
    &,
    &:active{
        text-decoration: underline;
    }
    &:hover{
        text-decoration: none;
    }
`;


const Typo = {
    Name,
    Title,
    H2,
    H3,
    H4,
    H5,
    P,
    A,
};

export default Typo;
