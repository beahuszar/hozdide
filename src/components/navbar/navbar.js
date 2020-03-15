import React, { useState, useRef, useEffect } from 'react';
import styles from './navbar.module.scss';
import NavItem from './navbarItem';
import CoverPhoto from '../coverphoto/coverphoto';
import { FaBars, FaTimes, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';

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
                <img
                  src="images/small_logo.png"
                  className={styles.logo}
                  alt="logo"
                />
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
            <NavItem to="/szolgaltatasok">Szolgáltatásaink</NavItem>
            <NavItem to="/">A Rendelőről</NavItem>
            <NavItem to="/">Galéria</NavItem>
            <NavItem to="/" external>
              <FaMapMarkerAlt></FaMapMarkerAlt>
            </NavItem>
            <NavItem to="https://www.facebook.com/hozdideallatorvos/" external>
              <FaFacebookF></FaFacebookF>
            </NavItem>
            <NavItem to="/">Kapcsolat</NavItem>
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
      <CoverPhoto />
    </div>
  );
};
