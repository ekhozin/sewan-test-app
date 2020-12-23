import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const MainLayout = ({ children }) => <Container>{children}</Container>;

MainLayout.propTypes = {
    children: PropTypes.node,
};

const memoized = React.memo(MainLayout);

export { memoized as MainLayout };
