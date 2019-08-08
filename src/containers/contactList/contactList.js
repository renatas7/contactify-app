import React from 'react';
import { Paper } from './../../components';
import styles from './contactList.module.scss';
import { UserCard } from './../../components';

const ContactList = () => {
  return (
    <div className={styles.container}>
      <Paper type="header">
        <UserCard />
      </Paper>
    </div>
  );
};

export default ContactList;
