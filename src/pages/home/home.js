import React, { useEffect } from 'react';
import { config } from '../../api/config';
import styles from './home.module.scss';

const Home = ({ history }) => {
  useEffect(() => {
    history.push(config.APP_PATHS.contacts);
  });
  return (
    <div className={styles.container}>
      <p>Coming soon...</p>
    </div>
  );
};

export default Home;
