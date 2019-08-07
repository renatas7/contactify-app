import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './nav.module.scss';
import { config } from './../../api/config';

const Nav = () => {
  const links = [
    {
      name: config.PAGES.home,
      url: config.APP_PATHS.home
    },
    {
      name: config.PAGES.first,
      url: config.APP_PATHS.first
    },
    {
      name: config.PAGES.second,
      url: config.APP_PATHS.second
    }
  ];

  const renderLinks = () =>
    links.map(({ name, icon, url }) => (
      <li className={styles.item} key={name}>
        <NavLink
          className={styles.link}
          activeClassName={styles.active}
          to={url}
        >
          <span className={styles.label}>{name}</span>
        </NavLink>
      </li>
    ));

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{renderLinks()}</ul>
    </nav>
  );
};

export default Nav;
