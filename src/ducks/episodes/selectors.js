import { generatePath } from 'react-router-dom';
import { createSelector } from 'reselect';

import { ROUTES, EMPTY_ARRAY, EMPTY_STRING } from '@/constants';

const selectEpisodesState = (state) => state.episodes;

const selectEpisodesIds = (state) => selectEpisodesState(state).episodes.ids;

const selectEpisodesById = (state) => selectEpisodesState(state).episodes.byId;

const selectCharactersById = (state) => selectEpisodesState(state).charactersById;

const selectIsEpisodesLoading = (state) => selectEpisodesState(state).isLoading;

const selectEpisode = (state) => selectEpisodesState(state).episode;

/**
 * Selector. Gets redux state and return list of episodes to render in React component.
 * @returns {
 *      {
 *          id: string,
 *          link: string,
 *          name: string,
 *          episode: string,
 *          characters: { id: string, name: string, link: string }
 *      }[]
 * }
 */
const selectEpisodesToUIList = createSelector(
    selectEpisodesIds,
    selectEpisodesById,
    selectCharactersById,
    (ids, byId, charactersById) =>
        ids.map((id) => {
            const episode = byId[id];

            return {
                ...episode,
                link: generatePath(ROUTES.EPISODE, { id: episode.id }),
                name: `${episode.episode}: ${episode.name}`,
                characters: episode.characters.map((characterId) => ({
                    ...charactersById[characterId],
                    link: generatePath(ROUTES.CHARACTER, { id: characterId }),
                })),
            };
        }),
);

const selectPagination = (state) => selectEpisodesState(state).pagination;

/**
 * Selector. Gets redux state and returns pagination for React component.
 * @returns {
 *      {
 *          page: number,
 *          prevPage: number|null,
 *          nextPage: number|null,
 *          isVisible: boolean
 *      }
 * }
 */
const selectPaginationToUI = createSelector(selectPagination, (pagination) => {
    const { next, prev, pages } = pagination;
    const page = prev === null ? next - 1 : prev + 1;

    return { page, prevPage: prev, nextPage: next, isVisible: pages > 1 };
});

/**
 * Selector. Gets redux state and returns episode's info.
 * @returns {{ name: string, airDate: string }}
 */
const selectEpisodeInfoToUI = createSelector(selectEpisode, ({ name, episode, airDate }) => ({
    name: episode ? `${episode}: ${name}` : EMPTY_STRING,
    airDate: airDate || EMPTY_STRING,
}));

/**
 * Selector. Gets redux state and returns list of characters to render in React component.
 * @returns {
 *      {
 *          id: string,
 *          name: string,
 *          link: string,
 *      }[]
 * }
 */
const selectEpisodeCharactersToUI = createSelector(selectEpisode, ({ characters = EMPTY_ARRAY }) =>
    characters.map(({ id, name }) => ({
        id,
        name,
        link: generatePath(ROUTES.CHARACTER, { id }),
    })),
);

export {
    selectEpisodesState,
    selectEpisodesIds,
    selectEpisodesById,
    selectEpisodesToUIList,
    selectIsEpisodesLoading,
    selectPaginationToUI,
    selectEpisodeInfoToUI,
    selectEpisodeCharactersToUI,
};
