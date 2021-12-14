import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoggedOutView = ({ currentUser }) => (
  !currentUser
    ? (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Главная
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Войти
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Регистрация
          </Link>
        </li>

      </ul>
    )
    : ''
);
export default LoggedOutView;
LoggedOutView.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    token: PropTypes.string,
    bio: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
