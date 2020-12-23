import { call, all, takeLatest, put, delay } from 'redux-saga/effects';

import { resetPatients, fetchPatientsRequest } from '@/ducks/patients/slice';
import { fetchTreatPhasesRequest } from '@/ducks/treatPhases/slice';
import { fetchPatientStatusesRequest } from '@/ducks/patientStatuses/slice';
import { clearPersistedState } from '@/utils/data-source';
import { resetLayout, startIsLoading, stopIsLoading } from '@/ducks/layout/slice';
import { resetAppointments, fetchAppointmentsRequest } from '@/ducks/appointments/slice';
import { resetComments, fetchCommentsRequest } from '@/ducks/comments/slice';
import { resetTables } from '@/ducks/tables/slice';
import { initializeNavItemsSaga } from '@/ducks/nav/sagas';
import { resetApp, initHomepage } from './slice';

function* initAppSaga() {
    yield call(initializeNavItemsSaga);
    yield put(fetchPatientStatusesRequest());
    yield put(fetchTreatPhasesRequest());
}

function* resetAppSaga() {
    yield put(startIsLoading());
    yield put(resetTables());
    yield put(resetLayout());
    yield put(resetAppointments());
    yield put(resetPatients());
    yield put(resetComments());
    yield delay(500);
    yield put(stopIsLoading());
    yield call(clearPersistedState);
}

function* initHomepageSaga() {
    yield put(fetchPatientsRequest());
    yield put(fetchAppointmentsRequest());
    yield put(fetchCommentsRequest());
}

function* watchAppSaga() {
    yield all([
        takeLatest(initHomepage.type, initHomepageSaga),
        takeLatest(resetApp.type, resetAppSaga),
        call(initAppSaga),
    ]);
}

export { initAppSaga, watchAppSaga };
