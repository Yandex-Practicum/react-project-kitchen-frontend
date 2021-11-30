import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navigationStyles from './Navigation.module.css';

function Navigation({isLoggedIn, currentUser}) {
  return (
    <nav className={navigationStyles.nav}>
      {!isLoggedIn ? (
        <ul className={navigationStyles.list}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName={navigationStyles.active}>
              Главная
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Войти
            </NavLink>
          </li>
        </ul>    
      ): (
        <ul className={navigationStyles.list}>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;Новая запись
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Настройки
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={`/@${currentUser.username}`}
            className="nav-link">
            <span>Hello, {currentUser.username}</span>
          </NavLink>
        </li>
        </ul>
      )}
    </nav>
  )
}

export default Navigation;