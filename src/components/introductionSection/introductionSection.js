import React from 'react';
import styles from './introductionSection.module.scss';

export default () => {
  return (
    <div className={styles.coverPhoto}>
      <img src="images/bemutatkozas.png" alt="bemutatkozas" />
      <h1>Hozd Ide! Allatorvosi rendelo</h1>
    </div>
  );
};
