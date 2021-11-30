import React from 'react';
import { NavLink } from 'react-router-dom';
import navigationStyles from './Navigation.module.css';
import homePath from '../../../images/home-icon.svg';

function Navigation({isLoggedIn, currentUser}) {
  return (
    <nav className={navigationStyles.nav}>
      {!isLoggedIn ? (
        <ul className={navigationStyles.list}>
          <li>
            <img src={homePath} alt="Home icon" />
            <NavLink to="/" className={navigationStyles.link} activeClassName={navigationStyles.active}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={navigationStyles.link} activeClassName={navigationStyles.active}>
              Войти
            </NavLink>
          </li>
        </ul>    
      ): (
        <ul className={navigationStyles.list}>
          <li className={navigationStyles.list_item}>
            <NavLink to="/" className="nav-link">
              Главная
            </NavLink>
          </li>
          <li className={navigationStyles.list_item}>
            <NavLink to="/editor" className="nav-link">
              <i className="ion-compose"></i>&nbsp;Новая запись
            </NavLink>
          </li>
          <li className={navigationStyles.list_item}>
            <NavLink to="/settings" className="nav-link">
              <i className="ion-gear-a"></i>&nbsp;Настройки
            </NavLink>
          </li>
          <li className={navigationStyles.list_item}>
            <NavLink
              to='/account'
              className="nav-link">
              <span>Hello, User</span>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navigation;