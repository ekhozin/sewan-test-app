import { all, fork } from 'redux-saga/effects';

import { watchAppSaga } from '@/ducks/app/sagas';
import { watchPatientsSaga } from '@/ducks/patients/sagas';
import { watchCommentsSaga } from '@/ducks/comments/sagas';
import { watchNavSaga } from '@/ducks/nav/sagas';
import { watchAppointmentsSaga } from '@/ducks/appointments/sagas';
import { watchTablesSaga } from '@/ducks/tables/sagas';
import { watchTreatPhasesSaga } from '@/ducks/treatPhases/sagas';
import { watchPatientStatusesSaga } from '@/ducks/patientStatuses/sagas';

function* rootSaga() {
    yield all([
        fork(watchAppSaga),
        fork(watchPatientsSaga),
        fork(watchCommentsSaga),
        fork(watchNavSaga),
        fork(watchAppointmentsSaga),
        fork(watchTablesSaga),
        fork(watchTreatPhasesSaga),
        fork(watchPatientStatusesSaga),
    ]);
}

export { rootSaga };
