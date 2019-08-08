import React from 'react';
import { Nav, Search, Logo, Paper, Dropdown } from './../../components';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <Paper type="header">
        <div className={styles.leftContainer}>
          <Logo />
          <div className={styles.navContainer}>
            <Nav />
            <Search type="user" />
          </div>
        </div>
        <Dropdown />
      </Paper>
    </div>
  );
};

export default Header;
