import React from 'react';
import styles from './checkbox.module.scss';

const Checkbox = ({ label, name, checked, value, onChange, ...rest }) => (
  <div className={styles.checkbox}>
    <input
      type="checkbox"
      checked={checked}
      value={value}
      onChange={onChange}
      {...rest}
    />
    <label htmlFor={name}>{label}</label>
  </div>
);

export default Checkbox;
