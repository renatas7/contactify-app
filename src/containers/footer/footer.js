import React from 'react';
import styles from './footer.module.scss';
import { Links, LastSync, Help, LastContainer } from './../../components';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <Links />
      </div>
      <div className={styles.middleContainer}>
        <LastSync />
        <Help />
      </div>
      <div className={styles.rightContainer}>
        <LastContainer />
      </div>
    </div>
  );
};

export default Footer;
