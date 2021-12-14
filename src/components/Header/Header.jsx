import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoggedOutView from './LoggedOutView/LoggedOutView';
import LoggedInView from './LoggedInView/LoggedInView';
import styles from './Header.module.css';

const Header = ({ appName, currentUser }) => (
  <nav className={`navbar navbar-light ${styles.section}`}>
    <div className="container">
      <Link to="/" className={`navbar-brand ${styles.title}`}>
        {appName}
      </Link>
      <LoggedOutView currentUser={currentUser} />
      <LoggedInView currentUser={currentUser} />
    </div>
  </nav>
);
export default Header;
Header.propTypes = {
  appName: PropTypes.string.isRequired,
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    token: PropTypes.string,
    bio: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
