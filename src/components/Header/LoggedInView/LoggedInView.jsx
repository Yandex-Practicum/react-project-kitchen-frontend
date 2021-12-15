import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './LoggedInView.module.css';

const LoggedInView = ({ currentUser }) => (
  currentUser
    ? (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className={`nav-link ${styles.main}`}>
            Главная
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose" />
&nbsp;Новая запись
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a" />
&nbsp;Настройки
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${currentUser.username}`}
            className="nav-link"
          >
            <span>
              Привет,
              {currentUser.username}
            </span>
          </Link>
        </li>

      </ul>
    )
    : ''
);
export default LoggedInView;
LoggedInView.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    token: PropTypes.string,
    bio: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
