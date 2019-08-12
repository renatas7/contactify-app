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
import PropTypes from 'prop-types';

const ContactList = ({ dispatch, contactsData }) => {
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

  const tableHeader = [
    { name: '', backround: '#0085a4' },
    { name: 'Name', backround: '#0085a4', filter: true },
    { name: 'Surname', backround: '#0390ad' },
    { name: 'City', backround: '#0699b8' },
    { name: 'Email', backround: '#0dacc9' },
    { name: 'Phone', backround: '#11b6d3', align: 'right' },
    { name: '', backround: '#13c0dd' },
    { name: '', backround: '#13c0dd' },
  ];

  const textAlign = align => {
    return { textALign: align };
  };

  const renderTable = () =>
    contactsData.map(({ id, active, name, surname, city, email, phone }) => (
      <TableRow
        key={id}
        onClick={() => rowClick(id, active, name, surname, city, email, phone)}
      >
        <TableCell align={'right'}>
          {active ? iconActive : iconInActive}
        </TableCell>
        <TableCell align={'left'}>{name}</TableCell>
        <TableCell align={'left'}>{surname}</TableCell>
        <TableCell align={'left'}>{city}</TableCell>
        <TableCell align={'left'}>{email}</TableCell>
        <TableCell align={'right'}>{phone}</TableCell>
        <TableCell align={'right'} styles={textAlign('right')}>
          {iconEdit}
        </TableCell>
        <TableCell align={'left'}>{iconDelete}</TableCell>
      </TableRow>
    ));

  const rowClick = (id, status, name, surname, city, email, phone) => {
    const data = {
      id,
      status,
      name,
      surname,
      city,
      email,
      phone,
    };
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
        <div className={styles.tableContainer}>
          <Table header={tableHeader} isEmpty={!contactsData.length}>
            {renderTable()}
          </Table>
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => ({
  contactsData: state.contactsState.contactsData,
});

ContactList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  contactsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      active: PropTypes.bool, //* status active must be required.
      //I made it not required, because user with id 6 haven't got active property.
      // It seams that is a bug, so need to check it out with backend developer
      // why this user with id 6 haven't active property //*
    }).isRequired
  ).isRequired,
};

export default connect(mapStateToProps)(ContactList);
