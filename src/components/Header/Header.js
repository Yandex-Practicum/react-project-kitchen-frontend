import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import headerStyles from './header.module.css';

const {
  container, nav, navItem, navLink, navLogo,
} = headerStyles;

const LoggedOutView = ({ currentUser }) => {
  if (!currentUser) {
    return (
      <ul className={`nav navbar-nav pull-xs-right ${nav}`}>
        <li className='nav-item'>
          <Link to='/' className={`nav-link ${navLink}`}>
            Home
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/login' className='nav-link'>
            Sign in
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/register' className='nav-link'>
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = ({ currentUser }) => {
  if (currentUser) {
    return (
      <ul className={`nav navbar-nav pull-xs-right ${nav}`}>
        <li className={navItem}>
          <Link to='/' className={navLink}>
            Home
          </Link>
        </li>

        <li className={navItem}>
          <Link to='/editor' className={navLink}>
            <i className='ion-compose'></i>&nbsp;New Post
          </Link>
        </li>

        <li className={navItem}>
          <Link to='/settings' className={navLink}>
            <i className='ion-gear-a'></i>&nbsp;Settings
          </Link>
        </li>

        <li className={navItem}>
          <Link to={`/@${currentUser.username}`} className={navLink}>
            <span>Hello, {currentUser.username}</span>
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

const Header = ({ appName, currentUser }) => (<>
      <nav className={`navbar navbar-light ${container}`}>
        <div className='container'>
          <Link to='/' className={navLogo}>
            {appName}
          </Link>

          <LoggedOutView currentUser={currentUser} />

          <LoggedInView currentUser={currentUser} />
        </div>
      </nav>
      </>
);

Header.propTypes = {
  appName: PropTypes.string,
  currentUser: PropTypes.object,
};

export default Header;
