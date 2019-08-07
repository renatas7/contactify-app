import React from 'react';

import styles from './layout.module.scss';
import { Header } from './../components';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default Layout;
