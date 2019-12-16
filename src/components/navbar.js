import React from 'react';
import styles from './navbar.module.scss';
import NavItem from './navbarItem';
import { FaBars, FaDog } from 'react-icons/fa';

export default () => (
  <header className={styles.container}>
    <nav>
      <ul className={styles.navbar}>
        <FaDog />
        <label for="checkbox" className={styles.navbar___hamburger}>
          <FaBars />
        </label>
        <input type="checkbox" id="checkbox" />
        <div className={styles.navbar___items}>
          <NavItem title="Kapcsolat" />
          <NavItem title="Galéria" />
          <NavItem title="Gyakori kérdések" />
          <NavItem title="Szolgáltatásaink" />
          <NavItem title="FB" />
          <NavItem title="IG" />
          <NavItem title="EN" />
        </div>
      </ul>
    </nav>
  </header>
);
