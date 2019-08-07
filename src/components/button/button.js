import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

const Button = ({ type, children, style, ...rest }) => {
  if (type === 'dropdown') {
    return (
      <button
        className={cn(styles.dropbtn, styles.dropdownMainStyle)}
        {...rest}
      >
        {children}
      </button>
    );
  }
};

export default Button;
