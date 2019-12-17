import React from 'react';
import styles from './navbar.module.scss';
import NavItem from './navbarItem';
import { FaBars, FaDog } from 'react-icons/fa';

export default () => (
  <header className={styles.container}>
    <nav>
      <ul className={styles.navbar}>
        <FaDog />
        <label htmlFor="checkbox" className={styles.navbar___hamburger}>
          <FaBars />
        </label>
        <input type="checkbox" id="checkbox" />
        <div className={styles.navbar___items}>
          <NavItem title="Kapcsolat" to="/" />
          <NavItem title="Galéria" to="/" />
          <NavItem title="Gyakori kérdések" to="/" />
          <NavItem title="Szolgáltatásaink" to="/" />
          <NavItem title="FB" to="/" external />
          <NavItem title="IG" to="/" />
          <NavItem title="EN" to="/" />
        </div>
      </ul>
    </nav>
  </header>
);
