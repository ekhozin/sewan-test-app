import styled from 'styled-components';

const Container = styled.div`
    max-width: 75rem;
    margin: 0 auto;
    padding: 1rem;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.baseBackground};
`;

export { Container };
