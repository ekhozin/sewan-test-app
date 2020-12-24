import styled from 'styled-components';

const StyledLoader = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: ${(props) => props.theme.zIndexes.loader};
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.white};
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export { StyledLoader };
