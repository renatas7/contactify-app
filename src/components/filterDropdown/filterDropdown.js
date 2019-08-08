import React from 'react';
import styles from './filterDropdown.module.scss';

const FilterDropdown = () => {
  return (
    <select className={styles.select}>
      <option value="City">City</option>
      <option value="name">Name</option>
      <option value="active">Active</option>
    </select>
  );
};

export default FilterDropdown;
