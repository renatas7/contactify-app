import React from 'react';
import styles from './links.module.scss';
import { NavLink } from 'react-router-dom';
import { Paper, navLinks } from './../..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Links = () => {
  console.log(navLinks);
  const renderLinks = () =>
    navLinks.map(({ name, url }) => (
      <li className={styles.item} key={name}>
        <NavLink className={styles.links} to={url}>
          <span className={styles.label}>{name}</span>
        </NavLink>
      </li>
    ));
  return (
    <div className={styles.container}>
      <Paper type="header">
        <div className={styles.linksContainer}>
          {renderLinks()}
          <div className={styles.copyright}>
            <FontAwesomeIcon
              icon={faCopyright}
              className={styles.faCopyright}
            />
            <p> {new Date().getFullYear()} Contactify</p>
            <div>
              <p>About</p>
              <p>Privacy</p>
              {/*just for now using p before we have real About and Privacy pages
                             and could replace this paragrphs with nav links */}
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Links;
