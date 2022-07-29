import React from 'react';
import style from './style.module.css'


const Banner = ({ appName }) => {

  return (
    <div className={style.banner}>
      <div className={style.container}>
        <h1 className={style.title}>
          {appName}
        </h1>
        <p className={style.text}>Где-то, в далекой-далекой галактике ...</p>
      </div>
    </div>
  );
};

export default Banner;
