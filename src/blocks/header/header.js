import React from 'react';
import { Nav, Search, Logo } from './../../components';
import styles from './header.module.scss';
import { Paper, Dropdown } from './../../components';

const Header = () => {
  return (
    <div className={styles.container}>
      <Paper>
        <Logo />
        <div className={styles.navContainer}>
          <Nav />
          <Search />
        </div>
        <Dropdown />
      </Paper>
    </div>
  );
};

export default Header;
