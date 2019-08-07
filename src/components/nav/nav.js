import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './nav.module.scss';
import { config } from './../../api/config';

const Nav = () => {
  const links = [
    {
      name: config.PAGES.dashboard,
      url: config.APP_PATHS.dashboard,
    },
    {
      name: config.PAGES.contacts,
      url: config.APP_PATHS.contacts,
    },
    {
      name: config.PAGES.notifications,
      url: config.APP_PATHS.notifications,
    },
  ];

  const renderLinks = () =>
    links.map(({ name, url }) => (
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
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.list}>{renderLinks()}</ul>
      </nav>
    </div>
  );
};

export default Nav;
