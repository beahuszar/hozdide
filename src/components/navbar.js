import React from 'react';
import styles from './navbar.module.scss';
import Logo from './logo';

export default () => (
  <div>
    <Logo className={styles.topnav_logo} />
    <div className={styles.topnav}>
      <a>EN</a>
      <a>IG</a>
      <a>FB</a>
      <a>Gyakori kérdések</a>
      <a>Galéria</a>
      <a>Kapcsolat</a>
      <a>Szolgáltatásaink</a>
    </div>
  </div>
);
