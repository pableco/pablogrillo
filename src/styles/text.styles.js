import styled, { css } from 'styled-components';
import mediaQueries from './mediaQueries.styles';

const Name = styled.h1`
    ${({ theme }) => css`
        font-size: 10vmin;
        margin: ${theme.r010} 0 0;
        font-weight: ${theme.regular};
        letter-spacing: ${theme.letterb1};
        text-transform: uppercase;
        text-align: center;
    `};
`;

const Title = styled.h2`
    ${({ theme }) => css`
        border-radius: ${theme.round};
        background: ${theme.neutral700};
        color: ${theme.neutral100};
        font-size: 3.2vmin;
        font-weight: ${theme.bold};
        letter-spacing: ${theme.letterb};
        line-height: ${theme.lhS};
        margin: 0 0 ${theme.r100} 0;
        padding: .4em .3em .3em .3em;
        text-align: center;
        text-transform: uppercase;
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
        padding-bottom: ${theme.r150};
        line-height: ${theme.lhB};
        color: ${theme.colorTextSecondary};

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
        background: ${theme.neutral700};
        border-radius: ${theme.round};
        color: ${theme.neutral050};
        padding: ${theme.r025} ${theme.r075} ${theme.r010};
        display: inline-block;

        @media ${mediaQueries.laptopL} {
            font-size: ${theme.b1};
        }
    `};
`;

const A = styled.a`
`;


const AboutTitle = styled(H3)`
    ${({ theme }) => css`
        line-height: 11rem;
        position: sticky;
        height: 11rem;
        top: calc(50vh - 11rem / 2);
        transform: rotate(180deg);
        writing-mode: vertical-lr;
        text-align: center;

        @media ${mediaQueries.tablet} {
            position: static;
            top: inherit;
            height: inherit;
        }
    `};
`;

const WorkTitle = styled(AboutTitle)``;
const ContactTitle = styled(AboutTitle)``;
const CoursesTitle = styled(AboutTitle)``;


const EducationTitle = styled(H3)`
    ${({ theme }) => css`
        line-height: 11rem;
        position: sticky;
        height: 14rem;
        top: calc(50vh - 14rem / 2);
        transform: rotate(180deg);
        writing-mode: vertical-lr;
        text-align: center;

        @media ${mediaQueries.tablet} {
            position: static;
            top: inherit;
            height: inherit;
        }
    `};
`;

const Typo = {
    Name,
    Title,
    YearCss,
    H3,
    H4,
    P,
    A,
    AboutTitle,
    WorkTitle,
    EducationTitle,
    ContactTitle,
    CoursesTitle,
};

export default Typo;
