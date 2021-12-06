import styled, { css } from 'styled-components';
import mediaQueries from './mediaQueries.styles';

const Name = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.h4};
        margin: ${theme.r010} 0 0;
        font-weight: ${theme.regular};
        letter-spacing: ${theme.letterb1};
        text-transform: uppercase;
        text-align: center;

        @media ${mediaQueries.mobileL} {
            font-size: 4rem;
        }
        @media ${mediaQueries.tablet} {
            font-size: ${theme.h3};
        }
        @media ${mediaQueries.laptop} {
            font-size: ${theme.h2};
        }
        @media ${mediaQueries.laptopL} {
            font-size: ${theme.h1};
        }
    `};
`;

const Title = styled.h2`
    ${({ theme }) => css`
        border-radius: ${theme.round};
        border: ${theme.borderS} solid ${theme.neutral900};
        font-size: ${theme.small};
        font-weight: ${theme.bold};
        letter-spacing: ${theme.letterb};
        line-height: ${theme.lhS};
        margin: 0 0 ${theme.r100} 0;
        padding: ${theme.r025} ${theme.r075} ${theme.r010};
        text-align: center;
        text-transform: uppercase;

        @media ${mediaQueries.mobileL} {
            font-size: ${theme.cap};
        }
        @media ${mediaQueries.tablet} {
            font-size: ${theme.b2};
        }
        @media ${mediaQueries.laptop} {
            font-size: 1.8rem;
            margin: 0 0 ${theme.r300} 0;
        }
        @media ${mediaQueries.laptopL} {
            font-size: ${theme.h5};
        }
    `};
`;

const H3 = styled.h3`
    ${({ theme }) => css`
        font-size: ${theme.h6};
        line-height: 1;
        font-weight: ${theme.bold};
        letter-spacing: ${theme.letterb};
        margin: 1rem 0;
        text-transform: uppercase;

        @media ${mediaQueries.laptop} {
            font-size: ${theme.h5};
        }
    `};
`;

const H4 = styled.h4`
    ${({ theme }) => css`
        font-size: ${theme.b1};
        line-height: 1;
        font-weight: ${theme.bold};
        letter-spacing: ${theme.letterh4};
        padding: ${theme.r150} 0 ${theme.r100} 0;

        @media ${mediaQueries.tablet} {
            font-size: ${theme.b2};
        }
        @media ${mediaQueries.laptop} {
            font-size: ${theme.b1};
        }
        @media ${mediaQueries.laptopL} {
            font-size: ${theme.h6};
        }
    `};
`;

const P = styled.p`
    ${({ theme }) => css`
        font-size: ${theme.b1};
        font-weight: ${theme.regular};
        letter-spacing: ${theme.ls};
        padding-bottom: ${theme.r150};

        @media ${mediaQueries.tablet} {
            font-size: ${theme.b2};
        }
        @media ${mediaQueries.laptop} {
            font-size: ${theme.b1};
        }
        @media ${mediaQueries.laptopL} {
            font-size: ${theme.h6};
        }
    `};
`;

const YearCss = styled.dt`
    ${({ theme }) => css`
        font-size: ${theme.b2};
        border: ${theme.borderS} solid ${theme.neutral900};
        border-radius: ${theme.round};
        padding: ${theme.r025} ${theme.r075} ${theme.r010};
        display: inline-block;

        @media ${mediaQueries.laptopL} {
            font-size: ${theme.b1};
        }
    `};
`;

const A = styled.a`
`;


const Typo = {
    Name,
    Title,
    YearCss,
    H3,
    H4,
    P,
    A,
};

export default Typo;
