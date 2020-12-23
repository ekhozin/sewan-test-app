import React from 'react';
import PropTypes from 'prop-types';

import { StyledListItem } from './styles';

const ListItem = ({ children }) => <StyledListItem>{children}</StyledListItem>;

ListItem.propTypes = {
    children: PropTypes.node,
};

const memoized = React.memo(ListItem);

export { memoized as ListItem };
