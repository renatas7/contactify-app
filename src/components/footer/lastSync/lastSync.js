import React from 'react';
import styles from './lastSync.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt, faSync } from '@fortawesome/free-solid-svg-icons';

const LastSync = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faCloudDownloadAlt}
            className={styles.faCopyright}
          />
        </div>
        <div>
          <p>Last Synced</p>
          <p>2016-06-02 14:33:10</p>
        </div>
      </div>
      <div className={styles.force}>
        <FontAwesomeIcon icon={faSync} className={styles.faSync} />
        <p>Force sync</p>
      </div>
    </div>
  );
};

export default LastSync;
