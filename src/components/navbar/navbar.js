import React, { useState, useRef, useEffect } from 'react';
import styles from './navbar.module.scss';
import NavItem from './navbarItem';
import { FaBars, FaDog, FaTimes } from 'react-icons/fa';

export default ({ children }) => {
  const [active, setActive] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    // TODO: check alternative solution
    mobileNavRef.current.style.right = active ? 0 : '-500px';
  }, [mobileNavRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };

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
            className={styles.menuToggle}
          >
            <span className={styles.srOnly}>Főmenü megnyitása</span>
            <FaBars aria-hidden="true" onClick={toggleActive} />
          </a>
        </div>
        <nav
          ref={mobileNavRef}
          id="main-menu"
          className={styles.mainMenu}
          aria-label="Főmenü"
        >
          <a
            href="#main-menu-toggle"
            id="main-menu-close"
            className={styles.menuClose}
            aria-label="Főmenü bezárása"
          >
            <span className={styles.srOnly}>Főmenü bezárása</span>
            <FaTimes onClick={toggleActive} />
          </a>
          <ul>
            <NavItem to="/">Galéria</NavItem>
            <NavItem to="/">Kapcsolat</NavItem>
            <NavItem to="/faq">Gyakori kérdések</NavItem>
            <NavItem to="/">Szolgáltatásaink</NavItem>
            <NavItem to="https://www.facebook.com/hozdideallatorvos/" external>
              FB
            </NavItem>
          </ul>
        </nav>
        <a
          href="#main-menu-toggle"
          className={styles.backdrop}
          tabIndex="-1"
          hidden
          aria-label="Főmenü bezárása"
          onClick={toggleActive}
        >
          <span className={styles.srOnly}>Főmenü bezárása</span>
        </a>
      </header>
      {children}
    </div>
  );
};
