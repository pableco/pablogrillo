import styled, { css } from 'styled-components';
import mediaQueries from '../styles/mediaQueries.styles';

const layoutConstants = {
    columTitleMobile: '5rem',
    columTitleMobileL: '10rem',
    columTitleLaptop: '15rem',
    columTitleLaptopL: '20rem',
    titleHeight: '11rem',
};

const WrapperCss = styled.div`
    ${({ theme }) => css`
        width: 100%;
        padding: 0;
        height: 100%;
        padding: 0;
        position: relative;
    `};
`;

const MainCss = styled.main`
    ${({ theme }) => css`
        border-right: ${theme.borderM} solid ${theme.neutral900};
    `};
`;

const Column = styled.div`
    @media ${mediaQueries.tablet} {
        min-width: 47%;
        padding: 0 3% 0 0;
    }
`;

const HeaderCss = styled.div`
    ${({ theme }) => css`
        background: linear-gradient(${theme.neutral100}, ${theme.neutral050});
        border-bottom: ${theme.borderM} solid ${theme.neutral900};
        display: grid;
        grid-auto-flow: row;
        height: 90vh;
        justify-content: stretch;
        border-right: ${theme.borderM} solid ${theme.neutral900};
    `};
`;


const MenuCss = styled.menu`
    ${({ theme }) => css`
        background-color: ${theme.colorBg};
        border-bottom: ${theme.borderM} solid ${theme.neutral900};
        z-index: ${theme.zBaseTop};
        display: none;
        justify-content: space-evenly;

        li {
            list-style: none;
        }
    `};
`;

const ContentTitle = styled.div`
    ${({ theme }) => css`
        position: sticky;
        top: 0;
        justify-self: center;
        align-self: center;
    `};
`;

const SectionWrapperCss = styled.section`
    ${({ theme }) => css`
        display: grid;
        grid-template: auto 1fr / ${layoutConstants.columTitleMobile} 1fr;

        @media ${mediaQueries.mobileL} {
            grid-template-columns: ${layoutConstants.columTitleMobileL} auto;
        }

        @media ${mediaQueries.laptop} {
            grid-template-columns: ${layoutConstants.columTitleLaptop} auto;
        }

        @media ${mediaQueries.laptopL} {
            grid-template-columns: ${layoutConstants.columTitleLaptopL} auto;
        }

        border-bottom: ${theme.borderM} solid ${theme.neutral900};
    `};
`;

const SectionTitleCss = styled.div`
    ${({ theme }) => css`
        grid-column: 1 / 2;
        background: ${theme.neutral100};
        border: ${theme.borderM} solid ${theme.neutral900};
        border-width: 0 ${theme.borderM} 0 ${theme.borderM};
        display: flex;
        justify-content: space-evenly;
    `};
`;

const SectionContentCommon = css`
    ${({ theme }) => css`
        grid-column: 2 / 3;
        padding: ${theme.r200};

        @media ${mediaQueries.mobileL} {
            padding: ${theme.r300};
        }
        @media ${mediaQueries.tablet} {
            padding: ${theme.r400};
        }
        @media ${mediaQueries.laptop} {
            padding: ${theme.r600};
        }
        @media ${mediaQueries.laptopL} {
            padding: ${theme.r800};
        }
    `};
`;

const SectionContentCss = styled.div`
    ${({ theme }) => css`
        ${SectionContentCommon}

        display: grid;
        column-gap: ${theme.r200};

        dd {
            margin-bottom: ${theme.r100};
        }

        @media ${mediaQueries.tablet} {
            grid-template-columns: repeat(2, 1fr);
        }
    `};
`;

const SectionFooterCss =  styled.footer`
    ${({ theme }) => css`
        ${SectionContentCommon}

        ul {

            display: grid;
            column-gap: ${theme.r200};

            @media ${mediaQueries.tablet} {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    `};
`;

SectionFooterCss.displayName = 'SectionFooterCss';

export {
    Column,
    ContentTitle,
    HeaderCss,
    MainCss,
    MenuCss,
    SectionContentCss,
    SectionFooterCss,
    SectionTitleCss,
    SectionWrapperCss,
    WrapperCss,
}
