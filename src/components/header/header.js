import React from 'react';
import styles from './header.module.scss';
import NavItem from './navbarItem';
import { FaBars, FaDog } from 'react-icons/fa';

export default ({ children }) => {
  console.log('header');
  return (
    <div>
      <header className={styles.container}>
        <nav>
          <ul className={styles.navbar}>
            <FaDog />
            <label htmlFor="checkbox" className={styles.navbar___hamburger}>
              <FaBars />
            </label>
            <input type="checkbox" id="checkbox" />
            <div className={styles.navbar___items}>
              <NavItem to="/">Kapcsolat</NavItem>
              <NavItem to="/">Galéria</NavItem>
              <NavItem to="/faq">Gyakori kérdések</NavItem>
              <NavItem to="/">Szolgáltatásaink</NavItem>
              <NavItem
                to="https://www.facebook.com/hozdideallatorvos/"
                external
              >
                FB
              </NavItem>
              <NavItem to="/">IG</NavItem>
              <NavItem to="/">EN</NavItem>
            </div>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
};
