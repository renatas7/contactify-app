import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/ContactsReducer';
import { modalsReducer } from './modals/ModalsReducer';

export const reducers = combineReducers({
  contactsState: contactsReducer,
  modalsState: modalsReducer,
});
