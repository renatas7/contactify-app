import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

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
      <button className={cn(styles.button)} {...rest}>
        {children}
      </button>
    );
  } else if (type === 'add') {
    return (
      <button className={cn(styles.button)} {...rest}>
        {children}
      </button>
    );
  }
};

export default Button;
