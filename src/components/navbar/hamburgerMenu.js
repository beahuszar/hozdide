import React from 'react';
import styles from './navbar.module.scss';
import { FaBars } from 'react-icons/fa';

export default ({ onToggle }) => {
  return (
    <a
      href="#main-menu"
      id="main-menu-toggle"
      aria-label="Főmenü megnyitása"
      className={styles.menuToggle}
    >
      <span className={styles.srOnly}>Főmenü megnyitása</span>
      <FaBars aria-hidden="true" onClick={() => onToggle()} />
    </a>
  );
};
