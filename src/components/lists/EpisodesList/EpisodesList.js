import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from '@/components/common/List';
import { EpisodeCard } from '@/components/common/EpisodeCard';

function EpisodesList(props) {
    const { items, onCharacterClick, onEpisodeClick } = props;

    return (
        <List>
            {items.map((item) => (
                <ListItem key={item.id}>
                    <EpisodeCard
                        {...item}
                        onCharacterClick={onCharacterClick}
                        onEpisodeClick={onEpisodeClick}
                    />
                </ListItem>
            ))}
        </List>
    );
}

EpisodesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            characters: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                }),
            ),
        }),
    ),
    onEpisodeClick: PropTypes.func.isRequired,
    onCharacterClick: PropTypes.func.isRequired,
};

const memoized = React.memo(EpisodesList);

export { memoized as EpisodesList };
