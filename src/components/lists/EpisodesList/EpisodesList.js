import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from '@/components/common/List';

function EpisodesList(props) {
    const { items } = props;

    return (
        <List>
            {items.map(({ id, name, characters }) => (
                <ListItem key={id}>{name}</ListItem>
            ))}
        </List>
    );
}

EpisodesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            characters: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                }),
            ),
        }),
    ),
    onItemClick: PropTypes.func.isRequired,
};

const memoized = React.memo(EpisodesList);

export { memoized as EpisodesList };
