import styled, { css } from 'styled-components';
import theme from './theme';

const List = styled.ul`
`;

const IconItem = styled.li`
    ${({theme}) => css`
        list-style: none;
        display: flex;
        padding: 0 0 ${theme.r200};
        align-items: center;
        color: ${theme.main};
        font-size: ${theme.b1};
    `};
`;

export {
    List,
    IconItem,
};
