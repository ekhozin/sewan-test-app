import { createSlice } from '@reduxjs/toolkit';

import { EMPTY_ARRAY, EMPTY_OBJECT } from '@/constants';
import { noop } from '@/utils/helpers';
import { DEFAULT_PAGINATION } from '@/constants';

const initialState = {
    episodes: {
        ids: EMPTY_ARRAY,
        byId: EMPTY_OBJECT,
    },
    charactersById: EMPTY_OBJECT,
    pagination: DEFAULT_PAGINATION,
    isLoading: false,
    episode: EMPTY_OBJECT,
};

const { reducer, actions } = createSlice({
    name: '@@episodes',
    initialState,
    reducers: {
        startIsLoading(state) {
            state.isLoading = true;
        },
        stopIsLoading(state) {
            state.isLoading = false;
        },
        fetchEpisodesRequest: noop,
        fetchEpisodesSuccess(state, action) {
            const {
                payload: { episodes, charactersById, pagination },
            } = action;
            state.episodes = episodes;
            state.charactersById = charactersById;
            state.pagination = pagination;
        },
        fetchEpisodeRequest: noop,
        fetchEpisodeSuccess(state, action) {
            const { payload } = action;
            state.episode = payload;
        },
        clearEpisode(state) {
            state.episode = initialState.episode;
        },
    },
});

const {
    startIsLoading,
    stopIsLoading,
    fetchEpisodesRequest,
    fetchEpisodesSuccess,
    fetchEpisodeRequest,
    fetchEpisodeSuccess,
    clearEpisode,
} = actions;

export {
    startIsLoading,
    stopIsLoading,
    fetchEpisodesRequest,
    fetchEpisodesSuccess,
    fetchEpisodeRequest,
    fetchEpisodeSuccess,
    clearEpisode,
    reducer,
};
