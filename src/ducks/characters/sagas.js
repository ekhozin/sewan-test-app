import { call, put, takeLatest } from 'redux-saga/effects';

import texts from '@/texts';
import { showErrorNotification } from '@/utils/notifications';
import {
    startIsLoading,
    stopIsLoading,
    fetchCharacterRequest,
    fetchCharacterSuccess,
} from './reducer';
import { fetchCharacter } from './services';

/**
 * Redux saga. Handles Character fetching.
 * @param {string} action.payload Charachter's id.
 * @returns {Generator}
 */
function* fetchCharacterSaga({ payload: id }) {
    try {
        yield put(startIsLoading());
        const { data } = yield call(fetchCharacter, id);
        yield put(fetchCharacterSuccess(data.character));
    } catch {
        yield call(showErrorNotification, texts.fetchCharacterError);
    } finally {
        yield put(stopIsLoading());
    }
}

/**
 * Watcher saga.
 * @returns {Generator}
 */
function* watchCharactersSaga() {
    yield takeLatest(fetchCharacterRequest.type, fetchCharacterSaga);
}

export { watchCharactersSaga };
