import React from 'react';
import styles from './paper.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Paper = ({ children, type, ...rest }) => {
  if (type === 'header') {
    return (
      <div className={cn(styles.container, styles.margins)}>{children}</div>
    );
  } else if (type === 'verticalAlign') {
    return <div className={cn(styles.container, styles.align)}>{children}</div>;
  } else if (type === 'default') {
    return (
      <div className={cn(styles.container, styles.margins, styles.align)}>
        {children}
      </div>
    );
  }
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['header', 'verticalAlign', 'default']),
};

export default Paper;
