import { actions } from '../actions';
import { call, put } from 'redux-saga/effects';
import { Api } from './../../api/api';

function* getContactsSaga() {
  try {
    yield put(actions.contacts.setUserOnSyncFlagAction(true));
    const data = yield call(Api.updateDashboardDetails);
    yield put(actions.contacts.setTableDataAction(data));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.contacts.setUserOnSyncFlagAction(false));
  }
}

function* setTableFilterSaga(action) {
  try {
    yield put(actions.contacts.setUserOnSyncFlagAction(true));
    const params = action.payload;
    const data = yield call(Api.updateDashboardDetails);
    if (params.filterValue.length === 0 && params.active === true) {
      const filteredData = data.filter(obj => obj.active === true);
      yield put(actions.contacts.setTableDataAction(filteredData));
    } else if (params.filterValue.length === 0 && params.active === false) {
      const data = yield call(Api.updateDashboardDetails);
      yield put(actions.contacts.setTableDataAction(data));
    } else {
      const filter = params.filterBy === 'Name' ? 'name' : 'city';
      const filteredData = data.filter(obj =>
        obj[filter].toLowerCase().includes(params.filterValue.toLowerCase())
      );
      if (params.active === true) {
        const justActive = filteredData.filter(obj => obj.active === true);
        yield put(actions.contacts.setTableDataAction(justActive));
      } else {
        yield put(actions.contacts.setTableDataAction(filteredData));
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.contacts.setUserOnSyncFlagAction(false));
  }
}

export { getContactsSaga, setTableFilterSaga };
