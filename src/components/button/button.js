import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

const Button = ({ type, children, style, name, ...rest }) => {
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
    return <button className={styles.filterButton}> {children} </button>;
  } else if (type === 'add') {
    return <button className={styles.add}>{children}</button>;
  }
};

export default Button;
