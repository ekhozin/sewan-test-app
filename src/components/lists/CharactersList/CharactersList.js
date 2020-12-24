import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { List, ListItem } from '@/components/common/List';

const CharactersList = ({ items }) => (
    <List>
        {items.map(({ id, name, link }) => (
            <ListItem key={id}>
                <Link to={link}>{name}</Link>
            </ListItem>
        ))}
    </List>
);

CharactersList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        }),
    ),
};

const memoized = React.memo(CharactersList);

export { memoized as CharactersList };
