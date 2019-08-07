import React from 'react';
import styles from './paper.module.scss';

const Paper = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Paper;
