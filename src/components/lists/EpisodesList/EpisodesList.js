import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem } from '@/components/common/List';
import { EpisodeCard } from '@/components/common/EpisodeCard';

/**
 * React component. Rendes list of episodes.
 * Each list item is represented by EpisodeCard-component.
 */
const EpisodesList = ({ items }) => (
    <List>
        {items.map((item) => (
            <ListItem key={item.link}>
                <EpisodeCard {...item} />
            </ListItem>
        ))}
    </List>
);

EpisodesList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            airDate: PropTypes.string.isRequired,
            characters: PropTypes.arrayOf(
                PropTypes.shape({
                    link: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                }),
            ),
        }),
    ),
};

const memoized = React.memo(EpisodesList);

export { memoized as EpisodesList };
