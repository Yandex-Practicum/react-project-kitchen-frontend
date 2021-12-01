import React from 'react';
import { Link } from 'react-router-dom';
import headerStyles from './Header.module.css';
import Navigation from './Navigation/Navigation';

function Header({appName, isLoggedIn}) {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <Link exact to="/" className={headerStyles.name}>
          {appName}
        </Link>
        <Navigation isLoggedIn={isLoggedIn}/>
      </div>
    </header>
  );
}

export default Header;
