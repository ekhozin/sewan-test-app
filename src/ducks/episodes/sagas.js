import { call, put, takeLatest, all } from 'redux-saga/effects';

import texts from '@/texts';
import { showErrorNotification } from '@/utils/notifications';
import { mapPagination } from '@/ducks/common/mappers';
import {
    startIsLoading,
    stopIsLoading,
    fetchEpisodesRequest,
    fetchEpisodesSuccess,
    fetchEpisodeRequest,
    fetchEpisodeSuccess,
} from './reducer';
import { fetchEpisodes, fetchEpisode } from './services';
import { mapEpisodes } from './mappers';

/**
 * Redux saga. Handles Episodes list fetching.
 * @param {number|string} action.payload.page Number of page
 * @param {string} action.payload.search Search parameter
 * @returns {Generator}
 */
function* fetchEpisodesSaga({ payload }) {
    try {
        const page = payload?.page;
        const search = payload?.search;
        yield put(startIsLoading());
        const { data } = yield call(fetchEpisodes, { page, search });
        const { byId, ids, charactersById } = yield call(mapEpisodes, data.episodes?.results);
        const pagination = yield call(mapPagination, data.episodes?.info);

        yield put(
            fetchEpisodesSuccess({
                episodes: { byId, ids },
                charactersById,
                pagination,
            }),
        );
    } catch {
        yield call(showErrorNotification, texts.fetchEpisodesError);
    } finally {
        yield put(stopIsLoading());
    }
}

/**
 * Redux saga. Handles Episode fetching.
 * @param {string} action.payload Episode's id.
 * @returns {Generator}
 */
function* fetchEpisodeSaga({ payload: id }) {
    try {
        yield put(startIsLoading());
        const { data } = yield call(fetchEpisode, id);
        yield put(fetchEpisodeSuccess(data.episode));
    } catch {
        yield call(showErrorNotification, texts.fetchEpisodeError);
    } finally {
        yield put(stopIsLoading());
    }
}

/**
 * Watcher saga.
 * @returns {Generator}
 */
function* watchEpisodesSaga() {
    yield all([
        takeLatest(fetchEpisodesRequest.type, fetchEpisodesSaga),
        takeLatest(fetchEpisodeRequest.type, fetchEpisodeSaga),
    ]);
}

export { watchEpisodesSaga };
