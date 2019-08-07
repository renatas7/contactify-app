import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './button.module.scss';

const Button = ({ children, color, url, classes = {}, ...rest }) => {
  if (url) {
    return (
      <Link
        className={cn(styles.button, styles[color], classes.button)}
        to={url}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  if (color === 'xls') {
    return (
      <button
        className={cn(styles.button, styles[color], classes.button)}
        {...rest}
      ></button>
    );
  }
};

export default Button;
