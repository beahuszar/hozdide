import React from 'react';
import styles from './navbar.module.scss';
import { FaTimes } from 'react-icons/fa';

export default ({ onToggle }) => {
  return (
    <a
      href="#main-menu-toggle"
      id="main-menu-close"
      className={styles.menuClose}
      aria-label="Főmenü bezárása"
    >
      <span className={styles.srOnly}>Főmenü bezárása</span>
      <FaTimes onClick={() => onToggle()} />
    </a>
  );
};
