import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './LoggedOutView.module.css';

const LoggedOutView = ({ currentUser }) => (
  !currentUser
    ? (
      <ul className={styles.navbar}>

        <li className={styles['nav-item']}>
          <NavLink to="/" exact className={styles.link} activeClassName={styles.main}>
            <i className="ion-home" />
          &nbsp;Главная
          </NavLink>
        </li>

        <li className={styles['nav-item']}>
          <NavLink to="/login" className={styles.link} activeClassName={styles.main}>
            <i className="ion-log-in" />
          &nbsp;Войти
          </NavLink>
        </li>

        <li className={styles['nav-item']}>
          <NavLink to="/register" className={styles.link} activeClassName={styles.main}>
            <i className="ion-person" />
          &nbsp;Регистрация
          </NavLink>
        </li>

      </ul>
    )
    : '');
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
