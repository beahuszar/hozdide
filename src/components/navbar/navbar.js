import React, { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import NavItem from './navbarItem';
import CoverPhoto from '../introductionSection/introductionSection';
import HamburgerMenu from './hamburgerMenu';
import MobileMenuCloseButton from './mobileMenuCloseButton';
import MobileMenuCloseArea from './mobileMenuCloseArea';
import { FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';

const renderLogo = () => {
  return (
    <div className={styles.logo}>
      <h1>
        <a href="/" aria-label="Ugrás főoldalra">
          <span className={styles.srOnly}>Ugrás főoldalra</span>
          <img src="images/small_logo.png" className={styles.logo} alt="logo" />
        </a>
      </h1>
    </div>
  );
};

const renderNavMenuItems = () => {
  return (
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
  );
};

const Navbar = ({ children }) => {
  const [active, setActive] = useState(false);
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState('-500px');

  useEffect(() => {
    const positionRight = active ? '0' : '-500px';
    setMobileMenuVisibility(positionRight);
  }, [active]);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div>
      <header>
        <div className={styles.row}>
          {renderLogo()}
          <HamburgerMenu onToggle={toggleActive} />
        </div>
        <nav
          style={{ right: `${mobileMenuVisibility}` }}
          id="main-menu"
          className={styles.mainMenu}
          aria-label="Főmenü"
        >
          <MobileMenuCloseButton onToggle={toggleActive} />
          {renderNavMenuItems()}
        </nav>
        <MobileMenuCloseArea onToggle={toggleActive} />
      </header>
      <CoverPhoto />
    </div>
  );
};

export default Navbar;
