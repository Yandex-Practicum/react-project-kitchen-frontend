import React, { useState } from 'react';
import cn from 'classnames';
import s from './ButtonTheme.module.scss';

const ButtonTheme = () => {
  const [isPress, setPress] = useState(false);
  const colorsChanged = {
    white: '#251D1D',
    dark: '#ffffff',
    darkText: '#ffffff',
    grayText: '#ffffff',
    bannerColor:'#251D1D',
    primary:'#ffffff',

  };
  const colorsDefault = {
    white: '#ffffff',
    dark: '#212121',
    darkText: '#0A0A0B',
    grayText: '#62626A',
    bannerColor:'#f4f4f6',
    primary:'#0000FF',
  };
  const handleClick = () => {
    setPress((prev) => !prev);
    const root = document.querySelector(':root');
    if (!isPress) {
      root.style = `--white:${colorsChanged.white}; 
      --dark:${colorsChanged.dark}; 
      --dark-text:${colorsChanged.darkText}; 
      --gray-text:${colorsChanged.grayText};
      --banner-color:${colorsChanged.bannerColor};
      --primary:${colorsChanged.primary};
      `;
    }
    if (isPress) {
      root.style = `--white:${colorsDefault.white};
      --dark:${colorsDefault.dark};
      --dark-text:${colorsDefault.darkText};
      --gray-text:${colorsDefault.grayText};
      --banner-color:${colorsDefault.bannerColor};
      --primary:${colorsDefault.primary};
      `;
    }
  };
  return (
    <div className={cn(s.wrapper)}>
      <label htmlFor="theme" className={cn(s.text)}>
        {isPress ? 'Тёмная тема' : 'Светлая тема'}
      </label>
      <input
        type="checkbox"
        name="theme"
        id="theme"
        className={cn(s.button, { [s.active]: isPress })}
        onClick={handleClick}
      />
    </div>
  );
};

export default ButtonTheme;
