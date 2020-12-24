import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: ${(props) => props.theme.colors.white};
    padding: 0.625rem;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.borderMain};
    border-radius: ${(props) => props.theme.geometry.borderRadius};
`;

const MainInfo = styled.div`
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
        width: 30%;
    }
`;

const CardTitle = styled.h2`
    margin: 0 0 0.625rem;
`;

const Name = styled(Link)`
    color: ${(props) => props.theme.colors.primary};
`;

const Date = styled.div`
    color: ${(props) => props.theme.colors.lightText};
`;

const AdditionalInfo = styled.div`
    width: 100%;

    @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
        width: 70%;
        padding-left: 0.625rem;
    }
`;

const CharactersTitle = styled.h3`
    margin: 0 0 0.625rem;
    font-size: 0.875rem;
`;

export { Container, MainInfo, CardTitle, Name, Date, AdditionalInfo, CharactersTitle };
