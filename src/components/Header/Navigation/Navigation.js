import React from 'react';
import { NavLink } from 'react-router-dom';
import navigationStyles from './Navigation.module.css';
import homePath from '../../../images/home-icon.svg';
import loginPath from '../../../images/login-icon.svg';
import articlePath from '../../../images/newArticle-icon.svg';
import settingsPath from '../../../images/settings-icon.svg';
import profilePath from '../../../images/profile-icon.svg'

function Navigation({isLoggedIn, currentUser}) {
  return (
    <nav className={navigationStyles.nav}>
      {isLoggedIn ? (
        <ul className={navigationStyles.list}>
          <li className={navigationStyles.list_item}>
            <NavLink 
            exact to="/" 
            className={navigationStyles.link} 
            activeClassName={navigationStyles.active}>
            <img className={navigationStyles.icon} src={homePath} alt="Home icon" />
              Главная
            </NavLink>
          </li>
          <li className={navigationStyles.list_item}> 
            <NavLink 
            to="/login" 
            className={navigationStyles.link} 
            activeClassName={navigationStyles.active}>
            <img className={navigationStyles.icon} src={loginPath} alt="Login icon" />
              Войти
            </NavLink>
          </li>
        </ul>    
      ): (
        <ul className={navigationStyles.list}>
          <li className={navigationStyles.list_item}>
            <NavLink 
            exact to="/" 
            className={navigationStyles.link} 
            activeClassName={navigationStyles.active}>
            <img className={navigationStyles.icon} src={homePath} alt="Home icon" />
              Главная
            </NavLink>
          </li>
          <li className={navigationStyles.list_item}>
            <NavLink 
            to="/editor" 
            className={navigationStyles.link} 
            activeClassName={navigationStyles.active}>
            <img className={navigationStyles.icon} src={articlePath} alt="Article icon" />
              Новая запись
            </NavLink>
          </li>
          <li className={navigationStyles.list_item}>
            <NavLink 
            to="/settings" 
            className={navigationStyles.link} 
            activeClassName={navigationStyles.active}>
            <img className={navigationStyles.icon} src={settingsPath} alt="Settings icon" />
              Настройки
            </NavLink>
          </li>
          <li className={navigationStyles.list_item}> 
            <NavLink
              to='/account'
              className={navigationStyles.link} 
              activeClassName={navigationStyles.active}>
              <img className={navigationStyles.icon} src={profilePath} alt="Profile icon" />
              <span>User User</span>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navigation;