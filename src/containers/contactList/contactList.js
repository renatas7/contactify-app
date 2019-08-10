import React, { useEffect, useCallback, useState } from 'react';
import { actions } from './../../state/actions';
import { connect } from 'react-redux';
// import { WithSpinner } from '../../components';
import { Paper } from './../../components';
import styles from './contactList.module.scss';
import { UserCard, Table, TableRow, TableCell } from './../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
  faPencilAlt,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

const ContactList = ({ dispatch, loading, contactsData }) => {
  const fetchData = useCallback(() => {
    dispatch(actions.contacts.updateDashboardAction());
  }, [dispatch]);
  useEffect(() => {
    fetchData();
  }, [dispatch, fetchData]);

  const [user, setUser] = useState({
    name: '',
    surname: '',
    city: '',
    email: '',
    phone: '',
  });

  const iconActive = <FontAwesomeIcon icon={faEye} />;
  const iconInActive = <FontAwesomeIcon icon={faEyeSlash} />;
  const iconEdit = <FontAwesomeIcon icon={faPencilAlt} />;
  const iconDelete = <FontAwesomeIcon icon={faTrashAlt} />;

  const tableHeader = ['', 'Name', 'Surname', 'City', 'Email', 'Phone', '', ''];

  const renderTable = () =>
    contactsData.map(({ id, active, name, surname, city, email, phone }) => (
      <TableRow
        key={id}
        onClick={() => rowClick(id, active, name, surname, city, email, phone)}
      >
        <TableCell>{active ? iconActive : iconInActive}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{surname}</TableCell>
        <TableCell>{city}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{phone}</TableCell>
        <TableCell>{iconEdit}</TableCell>
        <TableCell>{iconDelete}</TableCell>
      </TableRow>
    ));

  const rowClick = (id, status, name, surname, city, email, phone) => {
    const data = {
      name,
      surname,
      city,
      email,
      phone,
    };
    console.log(data);
    setUser(data);
  };

  return (
    <div className={styles.container}>
      <Paper type="header">
        <UserCard
          name={user.name}
          surname={user.surname}
          city={user.city}
          email={user.email}
          phone={user.phone}
        />

        <Table header={tableHeader} isEmpty={!contactsData.length}>
          {renderTable()}
        </Table>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => ({
  contactsData: state.contactsState.contactsData,
  loading: state.contactsState.isOnSync,
});

export default connect(mapStateToProps)(ContactList);
