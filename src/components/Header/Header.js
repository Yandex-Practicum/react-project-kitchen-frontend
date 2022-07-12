import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoggedOutView from './LoggedOutView';
import LoggedInView from './LoggedInView';
import headerStyles from './header.module.css';
import currentUserType from '../../utils/types';

const {
  container, navLogo, nav,
} = headerStyles;

const Header = ({ appName, currentUser }) => (
      <nav className={`navbar navbar-light ${container}`}>
        <div className='container'>
          <Link to='/' className={navLogo}>
            {appName}
          </Link>

          <ul className={`nav navbar-nav pull-xs-right ${nav}`}>
          {currentUser ? (<LoggedInView currentUser={currentUser} />) : (<LoggedOutView />) }
          </ul>

        </div>
      </nav>

);

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  currentUser: currentUserType,
};

export default Header;
