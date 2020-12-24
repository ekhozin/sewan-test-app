import { call, put, takeLatest } from 'redux-saga/effects';

import texts from '@/texts';
import { showErrorNotification } from '@/utils/notifications';
import {
    startIsLoading,
    stopIsLoading,
    fetchCharacterRequest,
    fetchCharacterSuccess,
} from './slice';
import { fetchCharacter } from './services';

function* fetchCharacterSaga({ payload: id }) {
    try {
        yield put(startIsLoading());
        const { data } = yield call(fetchCharacter, id);
        yield put(fetchCharacterSuccess(data.character));
    } catch(er) {
        console.log(er);
        yield call(showErrorNotification, texts.fetchCharacterError);
    } finally {
        yield put(stopIsLoading());
    }
}

function* watchCharactersSaga() {
    yield takeLatest(fetchCharacterRequest.type, fetchCharacterSaga);
}

export { watchCharactersSaga };
