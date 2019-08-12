import React from 'react';
import PropTypes from 'prop-types';
import styles from './table.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Table = ({ children, header, filter, isEmpty }) => {
  const headerColor = color => {
    return { background: color };
  };
  const row = Array.from({ length: header.length });

  const headerClick = filterName => {
    console.log('header filter was clicked ' + filterName);
  };

  const renderHeader = () =>
    header.map((col, i) => (
      <span
        className={styles.headerCell}
        style={headerColor(col.backround)}
        key={i}
        role="columnheader"
      >
        {col.filter ? (
          <div
            className={styles.headerTitleWithFilter}
            onClick={() => headerClick(col.name)}
          >
            <span>{col.name}</span>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        ) : (
          <div
            className={
              col.align !== undefined && col.align === 'right'
                ? styles.headerTitleRight
                : styles.headerTitle
            }
          >
            {col.name}{' '}
          </div>
        )}
      </span>
    ));

  const renderEmptyRow = () =>
    isEmpty && (
      <div className={styles.emptyRow}>
        {row.map((_, i) => (
          <TableCell key={i}> </TableCell>
        ))}
      </div>
    );

  return (
    <div className={styles.main}>
      <div className={styles.table} role="grid">
        <div className={styles.header} role="presentation">
          <div className={styles.headerRow} role="row">
            {renderHeader()}
          </div>
        </div>
        <div className={styles.body} role="presentation">
          {children}
        </div>
        {renderEmptyRow()}
      </div>
      {isEmpty && <p className={styles.infoText}>No results</p>}
    </div>
  );
};

export const TableRow = ({ children, onClick }) => (
  <div className={styles.bodyRow} onClick={onClick} role="row">
    {children}
  </div>
);

export const TableCell = ({ children, align }) => (
  <span
    className={align === 'right' ? styles.bodyCellAlignRight : styles.bodyCell}
    role="gridcell"
  >
    {children}
  </span>
);

Table.defaultProps = {
  isEmpty: false,
  filter: false,
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.array.isRequired,
  filter: PropTypes.bool,
  isEmpty: PropTypes.bool.isRequired,
};

TableRow.defaultProps = {
  onClick: () => {},
};

TableRow.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

TableCell.defaultProps = {
  children: null,
};

TableCell.propTypes = {
  children: PropTypes.node,
};

export default Table;
