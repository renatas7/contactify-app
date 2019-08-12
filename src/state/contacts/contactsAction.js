import { constants } from '../constants';

const setUserOnSyncFlagAction = flag => {
  return {
    type: constants.contacts.SET_ON_SYNC_FLAG,
    flag,
  };
};

const clearUserStateAction = () => {
  return {
    type: constants.contacts.CLEAR_USER_STATE,
  };
};

const updateDashboardAction = () => {
  return {
    type: constants.contacts.UPDATE_DASHBOARD_DATA,
  };
};

const setTableDataAction = payload => {
  return {
    type: constants.contacts.SET_TABLE_DATA,
    payload,
  };
};

const setContactsDataAction = () => {
  return {
    type: constants.contacts.SET_CONTACTS_DATA,
  };
};

const pushContactsDataAction = payload => {
  return {
    type: constants.contacts.PUSH_CONTACTS_DATA,
    payload,
  };
};

const setTableFilterAction = payload => {
  return {
    type: constants.contacts.SET_TABLE_FILTER,
    payload,
  };
};

const setTableSortingAction = payload => {
  return {
    type: constants.contacts.SET_TABLE_SORTING,
    payload,
  };
};

export const userActions = {
  clearUserStateAction,
  updateDashboardAction,
  setUserOnSyncFlagAction,
  setTableDataAction,
  setContactsDataAction,
  pushContactsDataAction,
  setTableFilterAction,
  setTableSortingAction,
};
