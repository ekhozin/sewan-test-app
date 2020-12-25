import styled from 'styled-components';

const StyledPager = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`;

const CurrentPage = styled.div`
    color: ${(props) => props.theme.colors.primary};
    padding: 0 0.625rem;
`;

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    color: ${(props) => props.theme.colors.white};
`;

export { StyledPager, CurrentPage, StyledButton };
