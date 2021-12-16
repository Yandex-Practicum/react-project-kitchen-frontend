import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './LoggedInView.module.css';

const LoggedInView = ({ currentUser }) => (
  currentUser
    ? (
      <ul className={styles.navbar}>

        <li className={styles['nav-item']}>
          <NavLink to="/" exact className={styles.link} activeClassName={styles.main}>
            <i className="ion-home" />
          &nbsp;Главная
          </NavLink>
        </li>

        <li className={styles['nav-item']}>
          <NavLink to="/editor" className={styles.link} activeClassName={styles.main}>
            <i className="ion-compose" />
&nbsp;Новая запись
          </NavLink>
        </li>

        <li className={styles['nav-item']}>
          <NavLink to="/settings" className={styles.link} activeClassName={styles.main}>
            <i className="ion-gear-a" />
&nbsp;Настройки
          </NavLink>
        </li>

        <li className={styles['nav-item']}>
          <NavLink
            to={`/@${currentUser.username}`}
            className={styles.link}
            activeClassName={styles.main}
          >
            <i className="ion-happy-outline" />
            <span>
            &nbsp;Привет,
              {currentUser.username}
            </span>
          </NavLink>
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
