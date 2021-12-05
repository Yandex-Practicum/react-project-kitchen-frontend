import React from 'react';
import { NavLink } from 'react-router-dom';
import navigationStyles from './Navigation.module.css';
import * as icons from '../../../images/icons';

function Navigation({currentUser}) {
  return (
    <nav className={navigationStyles.nav}>
      {!currentUser ? (
        <ul className={navigationStyles.list}>
          <li className={navigationStyles.list_item}>
            <NavLink 
              exact to="/" 
              className={navigationStyles.link} 
              activeClassName={navigationStyles.active}
            >
              <icons.HomeIcon/>
              <span className={navigationStyles.text}>Главная</span>
            </NavLink>
          </li>
          <li className={navigationStyles.list_item}> 
            <NavLink 
              to="/login" 
              className={navigationStyles.link} 
              activeClassName={navigationStyles.active}
            >
              <icons.LoginIcon/>
              <span className={navigationStyles.text}>Войти</span>
            </NavLink>
          </li>
        </ul>    
      ): (
        <ul className={navigationStyles.list}>
          <li className={navigationStyles.list_item}>
            <NavLink 
              exact to="/" 
              className={navigationStyles.link} 
              activeClassName={navigationStyles.active}
            >
              <icons.HomeIcon/>
              <span className={navigationStyles.text}>Главная</span>
            </NavLink>
          </li>
          <li className={navigationStyles.list_item}>
            <NavLink 
              to="/editor" 
              className={navigationStyles.link} 
              activeClassName={navigationStyles.active}
            >
              <icons.ArticleIcon/>
              <span className={navigationStyles.text}>Новая запись</span>  
            </NavLink>
          </li>
          <li className={navigationStyles.list_item}>
            <NavLink 
              to="/settings" 
              className={navigationStyles.link} 
              activeClassName={navigationStyles.active}
            >
              <icons.SettingsIcon/>
              <span className={navigationStyles.text}>Настройки</span>
            </NavLink>
          </li>
          <li className={navigationStyles.list_item}> 
            <NavLink
              to='/account'
              className={navigationStyles.link} 
              activeClassName={navigationStyles.active}
            >
              <icons.ProfileIcon/>
              <span className={navigationStyles.text}>{currentUser.username}</span>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navigation;