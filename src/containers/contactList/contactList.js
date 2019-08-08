import React from 'react';
import { Paper } from './../../components';
import styles from './contactList.module.scss';
import { UserCard } from './../../components';

const ContactList = () => {
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
      </Paper>
    </div>
  );
};

export default ContactList;
