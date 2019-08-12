import React from 'react';
import styles from './filterDropdown.module.scss';

const FilterDropdown = ({ onChange, value }) => {
  return (
    <select className={styles.select} onChange={onChange} value={value}>
      <option value="Name">Name</option>
      <option value="City">City</option>
    </select>
  );
};

export default FilterDropdown;
