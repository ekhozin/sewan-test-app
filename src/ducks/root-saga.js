import { all, fork } from 'redux-saga/effects';

import { watchEpisodesSaga } from '@/ducks/episodes/sagas';
import { watchCharactersSaga } from '@/ducks/characters/sagas';

function* rootSaga() {
    yield all([fork(watchEpisodesSaga), fork(watchCharactersSaga)]);
}

export { rootSaga };
