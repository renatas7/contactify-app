import React from 'react';
import styles from './search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ type }) => {
  if (type === 'user') {
    return (
      <div className={styles.searchBoxContainer}>
        <input className={styles.searchBox} placeholder="Search"></input>
        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
      </div>
    );
  } else if (type === 'filter') {
    return (
      <div className={styles.searchBoxContainer}>
        <input className={styles.searchBox} placeholder="Name"></input>
      </div>
    );
  }
};

export default Search;
