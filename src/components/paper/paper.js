import React from 'react';
import styles from './paper.module.scss';
import cn from 'classnames';

const Paper = ({ children, type, ...rest }) => {
  if (type === 'header') {
    return (
      <div className={cn(styles.container, styles.margins)}>{children}</div>
    );
  } else if (type === 'verticalAlign') {
    return <div className={cn(styles.container, styles.align)}>{children}</div>;
  } else {
    return (
      <div className={cn(styles.container, styles.margins, styles.align)}>
        {children}
      </div>
    );
  }
};

export default Paper;
