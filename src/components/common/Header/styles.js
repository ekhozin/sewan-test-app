import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 1rem;
    height: 3rem;
    background-color: ${(props) => props.theme.colors.primary};
`;

const StyledNavLink = styled(NavLink)`
    color: ${(props) => props.theme.colors.white};
`;

export { StyledHeader, StyledNavLink };
