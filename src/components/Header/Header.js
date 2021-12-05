import React from 'react';
import { Link } from 'react-router-dom';
import headerStyles from './Header.module.css';
import Navigation from './Navigation/Navigation';

function Header({appName, currentUser}) {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <Link exact to="/" className={headerStyles.name}>
          {appName}
        </Link>
        <Navigation currentUser={currentUser}/>
      </div>
    </header>
  );
}

export default Header;
