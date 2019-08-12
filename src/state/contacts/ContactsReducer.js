import { constants } from '../constants';

const INITIAL_STATE = {
  isOnSync: false,
  contactsData: [],
};

export const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.contacts.SET_ON_SYNC_FLAG:
      return {
        ...state,
        isOnSync: action.flag,
      };
    case constants.contacts.SET_TABLE_DATA:
      return {
        ...state,
        contactsData: action.payload,
      };

    default:
      return state;
  }
};
