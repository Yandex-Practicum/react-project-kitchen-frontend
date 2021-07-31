import React from 'react';
import styles from './banner.module.css';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {appName}
        </h1>
        <p className={styles.description}>Место, где готовится новый опыт</p>
      </div>
    </div>
  );
};

export default Banner;
