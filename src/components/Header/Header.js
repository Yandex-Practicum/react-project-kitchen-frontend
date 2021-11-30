import React from 'react';
import { Link } from 'react-router-dom';
import headerStyles from './Header.module.css';
import Navigation from './Navigation/Navigation';

function Header({appName, isLoggedIn, currentUser}) {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <Link to="/" className={headerStyles.name}>
          {appName}
        </Link>
        <Navigation isLoggedIn={isLoggedIn} currentUser={currentUser}/>
      </div>
    </header>
  );
}

export default Header;
