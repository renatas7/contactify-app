import { actions } from '../actions';
import { call, put } from 'redux-saga/effects';
import { Api } from './../../api/api';

function* getContactsSaga() {
  try {
    yield put(actions.contacts.setUserOnSyncFlagAction(true));
    const data = yield call(Api.updateDashboardDetails);
    yield put(actions.contacts.setDashboardDataAction(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.contacts.setUserOnSyncFlagAction(false));
  }
}

export { getContactsSaga };
