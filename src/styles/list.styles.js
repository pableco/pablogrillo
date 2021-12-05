import styled, { css } from 'styled-components';
import theme from './theme';

const List = styled.ul`
`;

const IconItem = styled.li`
    ${({theme}) => css`
        list-style: none;
        display: flex;
        padding: .4rem 0;
    `};
`;

export {
    List,
    IconItem,
};
