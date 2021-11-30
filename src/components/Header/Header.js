import React from 'react';
import { Link } from 'react-router-dom';
import headerStyles from './Header.module.css';
import Navigation from './Navigation/Navigation';
// import './Header.css';

function Header({appName, isLoggedIn}) {
  return (
    <header className="navbar navbar-light">
      <div className="container">
        <Link to="/" className={headerStyles.navbar_name}>
          {appName}
        </Link>
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
}

export default Header;
