import React from 'react';
import styles from './navbar.module.scss';
import NavItem from './navbarItem';
import { FaBars, FaDog } from 'react-icons/fa';

export default () => (
  <header>
    <nav>
      <ul className={styles.container}>
        <FaDog />
        <label className={styles.hamburger}>
          <input type="checkbox" />
          <FaBars />
          <div className={styles.side_menu}>
            <NavItem title="Kapcsolat" />
            <NavItem title="Galéria" />
            <NavItem title="Gyakori kérdések" />
            <NavItem title="Szolgáltatásaink" />
            <NavItem title="FB" />
            <NavItem title="IG" />
            <NavItem title="EN" />
          </div>
        </label>
      </ul>
    </nav>
  </header>
);
