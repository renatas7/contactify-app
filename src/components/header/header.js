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
        url={config.APP_PATHS.dashboard}
      >
        dashboard
      </Button>
      <Button
        color="primary"
        activeclassname={styles.active}
        url={config.APP_PATHS.contacts}
      >
        First
      </Button>
      <Button
        color="primary"
        activeclassname={styles.active}
        url={config.APP_PATHS.notifications}
      >
        notifications
      </Button>
    </div>
  );
};

export default Header;
