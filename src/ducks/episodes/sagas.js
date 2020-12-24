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
} from './slice';
import { fetchEpisodes, fetchEpisode } from './services';
import { mapEpisodes } from './mappers';

function* fetchEpisodesSaga({ payload = {} }) {
    try {
        const { page, search } = payload;
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
    } catch (err) {
        console.dir(err);
        yield call(showErrorNotification, texts.fetchEpisodesError);
    } finally {
        yield put(stopIsLoading());
    }
}

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

function* watchEpisodesSaga() {
    yield all([
        takeLatest(fetchEpisodesRequest.type, fetchEpisodesSaga),
        takeLatest(fetchEpisodeRequest.type, fetchEpisodeSaga),
    ]);
}

export { watchEpisodesSaga };
