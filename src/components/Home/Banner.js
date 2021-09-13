import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={`${styles.banner}`}>
      <div className={`${styles.container}`}>
        <h1 className={`${styles.title}`}>
          Обзоры пива
        </h1>

        <p className={`${styles.lead}`}>
          Место, где варятся ощущения
        </p>
      </div>
    </div>
  );
};

export default Banner;
