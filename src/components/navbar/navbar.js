import React, { useState } from 'react';
import styles from './navbar.module.scss';
import NavItem from './navbarItem';
import CoverPhoto from '../introductionSection/introductionSection';
import HamburgerMenu from './hamburgerMenu';
import MobileMenuCloseButton from './mobileMenuCloseButton';
import MobileMenuCloseArea from './mobileMenuCloseArea';
import { FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';

const renderLogo = () => (
  <div className={styles.logo}>
    <h1>
      <a href="/" aria-label="Ugrás főoldalra">
        <span className={styles.srOnly}>Ugrás főoldalra</span>
        <img src="images/small_logo.png" className={styles.logo} alt="logo" />
      </a>
    </h1>
  </div>
);

const renderNavMenuItems = () => (
  <ul>
    <NavItem to="/szolgaltatasok">Szolgáltatásaink</NavItem>
    <NavItem to="/">A Rendelőről</NavItem>
    <NavItem to="/">Galéria</NavItem>
    <NavItem to="/" external>
      <FaMapMarkerAlt />
    </NavItem>
    <NavItem to="https://www.facebook.com/hozdideallatorvos/" external>
      <FaFacebookF />
    </NavItem>
    <NavItem to="/">Kapcsolat</NavItem>
  </ul>
);

const Navbar = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const getMobileMenuRightPosition = () => (isActive ? '0' : '-500px');

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <header>
        <div className={styles.row}>
          {renderLogo()}
          <HamburgerMenu onToggle={toggleActive} />
        </div>
        <nav
          style={{ right: `${getMobileMenuRightPosition()}` }}
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
