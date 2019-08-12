import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ type, children, ...rest }) => {
  if (type === 'dropdown') {
    return (
      <button
        className={cn(styles.dropbtn, styles.dropdownMainStyle)}
        {...rest}
      >
        {children}
      </button>
    );
  } else if (type === 'filter') {
    return (
      <button className={styles.filterButton} {...rest}>
        {' '}
        {children}{' '}
      </button>
    );
  } else if (type === 'add') {
    return (
      <button className={styles.add} {...rest}>
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['dropdown', 'filter', 'add', 'dark']).isRequired,
};

export default Button;
