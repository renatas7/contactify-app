import { constants } from './constants';
import { takeLatest, all, call } from 'redux-saga/effects';

import { getContactsSaga } from './contacts/ContactsSaga';

function* actionWatcher() {
  yield takeLatest(constants.contacts.UPDATE_DASHBOARD_DATA, getContactsSaga);
}

export default function* rootSaga() {
  yield all([call(actionWatcher)]);
}
