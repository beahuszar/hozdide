import React from 'react';
import styles from './header.module.scss';
import NavItem from './navbarItem';
import { FaBars, FaDog, FaTimes } from 'react-icons/fa';

export default ({ children }) => {
  /*        <nav>
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
*/
  return (
    <div>
      <header>
        <div className={styles.row}>
          <div className={styles.logo}>
            <h1>
              <a href="/" aria-label="Ugrás főoldalra">
                <span className={styles.srOnly}>Ugrás főoldalra</span>
                <FaDog aria-hidden="true" />
              </a>
            </h1>
          </div>
          <a
            href="#main-menu"
            id="main-menu-toggle"
            aria-label="Főmenü megnyitása"
          >
            <span className={styles.srOnly}>Főmenü megnyitása</span>
            <FaBars aria-hidden="true" />
          </a>
        </div>
        <nav id="main-menu" className={styles.mainMenu} aria-label="Főmenü">
          <a
            href="#main-menu-toggle"
            id="main-menu-close"
            className={styles.menuClose}
            aria-label="Főmenü bezárása"
          >
            <span className={styles.srOnly}>Főmenü bezárása</span>
            <FaTimes />
          </a>
          <ul>
            <NavItem to="/">Kapcsolat</NavItem>
            <NavItem to="/">Galéria</NavItem>
            <NavItem to="/faq">Gyakori kérdések</NavItem>
            <NavItem to="/">Szolgáltatásaink</NavItem>
            <NavItem to="https://www.facebook.com/hozdideallatorvos/" external>
              FB
            </NavItem>
            <NavItem to="/">IG</NavItem>
            <NavItem to="/">EN</NavItem>
          </ul>
        </nav>
        <a
          href="#main-menu-toggle"
          class={styles.backdrop}
          tabindex="-1"
          hidden
        ></a>
      </header>
      {children}
    </div>
  );
};
