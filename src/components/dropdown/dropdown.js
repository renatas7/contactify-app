import React, { useState } from 'react';
import cn from 'classnames';

import styles from './dropdown.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Button } from './../../components';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <Button type="dropdown" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faUser} className={styles.faUser} />
        Jorah Mormont
        <FontAwesomeIcon icon={faCaretDown} className={styles.arrow} />
      </Button>

      <div className={cn(styles.dropdownContent, isOpen ? styles.show : '')}>
        <div>
          <FontAwesomeIcon icon={faUsers} className={styles.faUser} />
          Groups
        </div>
        <div>
          <FontAwesomeIcon icon={faComments} className={styles.faUser} />
          Frequently contacted
        </div>
        <div>
          {' '}
          <FontAwesomeIcon icon={faWrench} className={styles.faUser} />
          Preferences
        </div>
        <div>
          <FontAwesomeIcon icon={faPowerOff} className={styles.faUser} />
          Log out
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
