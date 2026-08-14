import styled, { css } from 'styled-components';
import mediaQueries from './mediaQueries.styles';

const List = styled.ul`
`;

const IconItem = styled.li`
    ${({theme}) => css`
        list-style: none;
        display: flex;
        padding: 0 0 ${theme.r200};
        align-items: center;
        color: ${theme.colorLink};
        font-size: ${theme.b1};
    `};
`;

const TagList = styled.ul`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.r050};
        padding: 0 0 ${theme.r200};
    `};
`;

const Tag = styled.li`
    ${({ theme }) => css`
        list-style: none;
        background: ${theme.neutral100};
        border-radius: ${theme.round};
        color: ${theme.colorText};
        font-size: ${theme.b2};
        padding: ${theme.r025} ${theme.r075} ${theme.r010};

        @media ${mediaQueries.laptopL} {
            font-size: ${theme.b1};
        }
    `};
`;

export {
    List,
    IconItem,
    Tag,
    TagList,
};
