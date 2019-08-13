import React from 'react';
import styles from './checkbox.module.scss';
import PropTypes from 'prop-types';

const Checkbox = ({ label, name, checked, value, onChange, ...rest }) => (
  <div className={styles.checkbox}>
    <input
      type="checkbox"
      checked={checked}
      value={value}
      onChange={onChange}
      {...rest}
    />
    <label htmlFor={name} onClick={onChange}>
      {label}
    </label>
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    PropTypes.bool.isRequired,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
