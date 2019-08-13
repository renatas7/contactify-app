import React from 'react';
import styles from './help.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';

const Help = () => {
  return (
    <div className={styles.container}>
      <div>
        <FontAwesomeIcon icon={faStethoscope} className={styles.bigIcon} />
        <div>
          <p>Help desk and Resolution center available:</p>
          <p>I-IV 8:00-18:00, V 8:00-16:45</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
