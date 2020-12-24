import React from 'react';
import PropTypes from 'prop-types';

import { StyledRow } from './styles';

const Row = ({ children }) => <StyledRow>{children}</StyledRow>;

Row.propTypes = {
    children: PropTypes.node,
};

const memoized = React.memo(Row);

export { memoized as Row };
