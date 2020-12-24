import styled from 'styled-components';

const Title = styled.p`
    font-weight: 700;
    margin: 0 0 0.5rem;
`;

const Data = styled.p`
    margin: 0;
    color: ${(props) => props.theme.colors.lightText};
`;

export { Title, Data };
