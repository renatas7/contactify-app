import { userActions } from './contacts/contactsAction';
import { modalActions } from './modals/ModalsActions';

export const actions = {
  contacts: userActions,
  modal: modalActions,
};
