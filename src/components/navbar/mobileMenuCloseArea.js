import React from 'react';
import styles from './navbar.module.scss';

export default ({ onToggle }) => {
  return (
    <a
      href="#main-menu-toggle"
      className={styles.backdrop}
      tabIndex="-1"
      hidden
      aria-label="Főmenü bezárása"
      onClick={() => onToggle()}
    >
      <span className={styles.srOnly}>Főmenü bezárása</span>
    </a>
  );
};
