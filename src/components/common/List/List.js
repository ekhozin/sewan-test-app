import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './styles';

const List = ({ children }) => <StyledList>{children}</StyledList>;

List.propTypes = {
    children: PropTypes.node,
};

const memoized = React.memo(List);

export { memoized as List };
