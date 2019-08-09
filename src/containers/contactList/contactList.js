import React, { useEffect, useCallback } from 'react';
import { actions } from './../../state/actions';
import { connect } from 'react-redux';
// import { WithSpinner } from '../../components';
import { Paper } from './../../components';
import styles from './contactList.module.scss';
import { UserCard, Table, TableRow, TableCell } from './../../components';

const ContactList = ({ dispatch, loading, contactsData }) => {
  const fetchData = useCallback(() => {
    dispatch(actions.contacts.updateDashboardAction());
  }, [dispatch]);
  useEffect(() => {
    fetchData();
  }, [dispatch, fetchData]);

  const tableHeader = ['Name', 'Surname', 'City', 'Email', 'Phone', '', ''];

  const renderTable = () =>
    contactsData.map(({ id, name, surname, city, email, phone }) => (
      <TableRow
        key={id}
        onClick={() => rowClick(id, name, surname, city, email, phone)}
      >
        <TableCell>{name}</TableCell>
        <TableCell>{surname}</TableCell>
        <TableCell>{city}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{phone}</TableCell>
        <TableCell>ed</TableCell>
        <TableCell>del</TableCell>
      </TableRow>
    ));

  const rowClick = (name, surname, city, email, phone) => {
    const data = {
      name,
      surname,
      city,
      email,
      phone,
    };
  };

  return (
    <div className={styles.container}>
      <Paper type="header">
        <UserCard
          name={'jon'}
          surname={'Doe'}
          city={'Vilnius'}
          email={'jondeo@gmail.com'}
          phone={'+37064578945'}
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
