import React from 'react';
import styles from './search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Search = ({ type, filterParam, onChange, value }) => {
  if (type === 'user') {
    return (
      <div className={styles.searchBoxContainer}>
        <input className={styles.searchBox} placeholder="Search"></input>
        <button>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </button>
      </div>
    );
  } else if (type === 'filter') {
    return (
      <div className={styles.searchBoxContainer}>
        <input
          className={styles.searchBox}
          placeholder={filterParam}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
};

Search.propTypes = {
  type: PropTypes.oneOf(['user', 'filter']),
};

export default Search;
