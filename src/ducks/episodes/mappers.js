import { EMPTY_ARRAY } from '@/constants';

function mapEpisodes(episodes = EMPTY_ARRAY) {
    return episodes.reduce(
        // eslint-disable-next-line no-unused-vars
        (acc, { typename, ...episode }) => {
            acc.ids.push(episode.id);

            acc.byId[episode.id] = {
                ...episode,
                // eslint-disable-next-line no-unused-vars
                characters: episode.characters?.map(({ typename, ...character }) => {
                    if (!acc.charactersById[character.id]) {
                        acc.charactersById[character.id] = character;
                    }

                    return character.id;
                }),
            };

            return acc;
        },
        {
            ids: [],
            byId: {},
            charactersById: {},
        },
    );
}

export { mapEpisodes };
