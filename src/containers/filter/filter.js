import React from 'react';
import { Search } from './../../components';
import styles from './filter.module.scss';
import { Paper, FilterDropdown, CheckBox, Button } from './../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Filter = () => {
  return (
    <div className={styles.container}>
      <Paper type="">
        <div className={styles.filterContainer}>
          <Search type="filter" />
          <FilterDropdown />
          <CheckBox name="Show active" label="Show active" value="0" />
          <Button type="filter">FILTER</Button>
        </div>
        <Button type="add">
          <FontAwesomeIcon icon={faPlusCircle} className={styles.plusCircle} />
          <span className={styles.buttonText}>ADD NEW CONTRACT</span>
        </Button>
      </Paper>
    </div>
  );
};

export default Filter;