import { constants } from './constants';
import { takeLatest, all, call } from 'redux-saga/effects';

import { getContactsSaga, setTableFilterSaga } from './contacts/ContactsSaga';

function* actionWatcher() {
  yield takeLatest(constants.contacts.UPDATE_DASHBOARD_DATA, getContactsSaga);
  yield takeLatest(constants.contacts.SET_TABLE_FILTER, setTableFilterSaga);
}

export default function* rootSaga() {
  yield all([call(actionWatcher)]);
}
