import React from 'react';
import styles from './logo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faUserCircle} className={styles.icon} />
      <h1 className={styles.h1}>CONTACTIFY</h1>
    </div>
  );
};

export default Logo;
