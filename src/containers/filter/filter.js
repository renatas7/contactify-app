import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions } from './../../state';
import { Search } from './../../components';
import styles from './filter.module.scss';
import { Paper, FilterDropdown, CheckBox, Button } from './../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ dispatch }) => {
  const [active, setActive] = useState(false);
  const [filterParam, setFilterParam] = useState('Name');
  const [inputValue, setInputValue] = useState('');

  const changeDropdownValue = () => {
    if (filterParam === 'Name') {
      setFilterParam('City');
    } else {
      setFilterParam('Name');
    }
  };

  const filter = () => {
    const data = {
      active: active,
      filterBy: filterParam,
      filterValue: inputValue,
    };

    dispatch(actions.contacts.setTableFilterAction(data));
  };

  return (
    <div className={styles.container}>
      <Paper type="default">
        <div className={styles.filterContainer}>
          <Search
            type="filter"
            filterParam={filterParam}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <FilterDropdown
            value={filterParam}
            onChange={() => changeDropdownValue()}
          />
          <CheckBox
            name="Show active"
            label="Show active"
            value={filterParam}
            checked={active}
            onChange={() => setActive(!active)}
          />
          <Button type="filter" onClick={filter}>
            FILTER
          </Button>
        </div>
        <Button type="add">
          <FontAwesomeIcon icon={faPlusCircle} className={styles.plusCircle} />
          <span className={styles.buttonText}>ADD NEW CONTRACT</span>
        </Button>
      </Paper>
    </div>
  );
};

export default connect()(Filter);
