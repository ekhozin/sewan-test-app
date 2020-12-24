import React from 'react';

import { EpisodesList } from '@/components/lists';

const episodes = [
    {
        id: 1,
        name: 'Episode 1',
        date: 'December 2, 2013',
        characters: [
            { id: 1, name: 'Name 1' },
            { id: 2, name: 'Name 2' },
        ],
    },
    {
        id: 2,
        name: 'Episode 2',
        date: 'December 5, 2013',
        characters: [
            { id: 3, name: 'Name 3' },
            { id: 4, name: 'Name 4' },
            { id: 5, name: 'Name 5' },
            { id: 6, name: 'Name 6' },
            { id: 7, name: 'Name 7' },
            { id: 8, name: 'Name 8' },
            { id: 9, name: 'Name 9' },
            { id: 10, name: 'Name 10' },
            { id: 11, name: 'Name 11' },
            { id: 12, name: 'Name 12' },
        ],
    },
];

function HomePageContainer() {
    return <EpisodesList items={episodes} />;
}

const memoized = React.memo(HomePageContainer);

export { memoized as HomePageContainer };
