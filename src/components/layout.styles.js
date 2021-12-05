import styled, { css } from 'styled-components';
import TextCss from '../styles/text.styles';
import mediaQueries from '../styles/mediaQueries.styles';

const layoutConstants = {
    columTitle: '5rem',
};

/* @media ${mediaQueries.mobileL} {
}
@media ${mediaQueries.tablet} {
}
@media ${mediaQueries.laptopL} {
} */

const WrapperCss = styled.div`
    width: 100%;
    padding: 0;
    height: 100%;
    margin: 0;
    @media ${mediaQueries.mobileL} {
        margin: 0 0 0 5rem;
    }
`;

const HeaderCss = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colorBg};
        border-bottom: ${theme.borderS} solid ${theme.neutral900};
        position: sticky;
        top: 0;
        z-index: ${theme.zBaseTop};
    `};
`;

const MenuCss = styled.menu`
    ${({ theme }) => css`
        background-color: ${theme.colorBg};
        border: ${theme.borderS} solid ${theme.neutral900};
        z-index: ${theme.zBaseTop};
        display: none;
    `};
`;

const ContentColumTitle = styled.div`
    ${({ theme }) => css`
        flex: 1 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    `};
`;

const Column = styled.div`
    @media ${mediaQueries.tablet} {
        max-width: 46%;
        padding: 0 4% 0 0;
    }
`;

const MainCss = styled.main`
    ${({ theme }) => css`

    `};
`;

const SectionWrapperCss = styled.section`
    ${({ theme }) => css`
        display: grid;
        grid-template: auto 1fr / ${layoutConstants.columTitle} 1fr;
        border-bottom: ${theme.borderS} solid ${theme.neutral900};
        /* align-items: stretch;
        border-bottom: ${theme.borderS} solid ${theme.neutral900};
        display: flex;
        flex-direction: row;
        position: relative;

        :before {
            content: '';
            background: ${theme.neutral100};
            border: ${theme.borderS} solid ${theme.neutral900};
            border-width: 0 ${theme.borderS} 0 ${theme.borderS};
            flex: 0 0 ${layoutConstants.columTitle};
            position: absolute;
            top: 0;
            left: 0;
            width: ${layoutConstants.columTitle};
            height: 100%;
        } */
    `};
`;

const SectionTitleCss = styled.div`
    ${({ theme }) => css`
        grid-column: 1 / 2;
        background: ${theme.neutral100};
        h3 {
            position: sticky;
            top: 0;
            transform: rotate(180deg);
            writing-mode: vertical-lr;
        }
    `};
`;

const SectionContentCss = styled.div`
    ${({ theme }) => css`
        grid-column: 2 / 3;
        padding: 5rem;
    `};
`;

const YearCss = styled(TextCss.H4)`
    ${({ theme }) => css`
        border: ${theme.borderS} solid ${theme.neutral900};
        border-radius: ${theme.round};
        padding: .1rem .75rem;
        display: inline-block;
    `};
`;

export {
    Column,
    MenuCss,
    HeaderCss,
    ContentColumTitle,
    MainCss,
    SectionContentCss,
    SectionWrapperCss,
    SectionTitleCss,
    YearCss,
    WrapperCss,
}
