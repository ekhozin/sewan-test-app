import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '@/components/common/Header';
import { StyledMainLayout, Content, HeaderWrapper } from './styles';

/**
 * React component. Renders main layout for page: header and content.
 */
const MainLayout = ({ children }) => (
    <StyledMainLayout>
        <HeaderWrapper>
            <Header />
        </HeaderWrapper>
        <Content>{children}</Content>
    </StyledMainLayout>
);

MainLayout.propTypes = {
    children: PropTypes.node,
};

const memoized = React.memo(MainLayout);

export { memoized as MainLayout };
