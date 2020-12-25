import React from 'react';
import PropTypes from 'prop-types';

import { StyledRow } from './styles';

/**
 * React component. Renders row for HTML layout.
 */
const Row = ({ children }) => <StyledRow>{children}</StyledRow>;

Row.propTypes = {
    children: PropTypes.node,
};

const memoized = React.memo(Row);

export { memoized as Row };
