import styled from 'styled-components';
import TextCss from '../styles/text.styles';


const WrapperCss = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 0 auto 6rem
`;

const HeaderCss = styled.div`
    display: flex;
    flex-direction: column;
`;

const BackLinkCss = styled.div`
    margin: 3rem 0 0;
`;

const HomeWrapperCss = styled.div`
    margin: 3rem auto 0;
`;

const SectionWrapperCss = styled.section`
    margin: 4rem 0;
`;

const YearCss = styled(TextCss.H4)`
    margin: 2rem 0 0;
`;

export {
    BackLinkCss,
    HeaderCss,
    HomeWrapperCss,
    SectionWrapperCss,
    YearCss,
    WrapperCss,
}
