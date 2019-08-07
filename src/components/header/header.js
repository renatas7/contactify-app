import React from 'react';
import styles from './header.module.scss';
import { Button } from '..';
import { config } from '../../api/config';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Button
        color="primary"
        activeclassname={styles.active}
        url={config.APP_PATHS.home}
      >
        Home
      </Button>
      <Button
        color="primary"
        activeclassname={styles.active}
        url={config.APP_PATHS.first}
      >
        First
      </Button>
      <Button
        color="primary"
        activeclassname={styles.active}
        url={config.APP_PATHS.second}
      >
        Second
      </Button>
    </div>
  );
};

export default Header;
