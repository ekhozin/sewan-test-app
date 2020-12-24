import styled from 'styled-components';

const StyledMainLayout = styled.div`
    max-width: 75rem;
    margin: 0 auto;

    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.baseBackground};
`;

const Content = styled.main`
    padding: 1rem;
`;

const HeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;
`;

export { StyledMainLayout, Content, HeaderWrapper };
