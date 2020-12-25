import React from 'react';

import { ROUTES } from '@/constants';
import texts from '@/texts';
import { StyledHeader, StyledNavLink } from './styles';

/**
 * React component. Renders application's header.
 */
function Header() {
    return (
        <StyledHeader>
            <nav>
                <StyledNavLink to={ROUTES.HOME}>{texts.home}</StyledNavLink>
            </nav>
        </StyledHeader>
    );
}

const memoized = React.memo(Header);

export { memoized as Header };
