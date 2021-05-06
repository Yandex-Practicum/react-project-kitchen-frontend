import React from 'react';
import { Link } from 'react-router-dom';

import style from "./Header.module.scss"

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
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
            Зарегестрироваться
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Главная
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;Новая запись
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Настройки
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            <span><img src="" alt="ava" />&nbsp;{props.currentUser.username}</span>
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

const Header = (props) => {
  return (
    <nav className="navbar">
    {/* <nav className={style.navbar}> */}
      <div className="container">

        <Link to="/" className="navbar-brand">
          {props.appName.toLowerCase()}
        </Link>

        <LoggedOutView currentUser={props.currentUser} />

        <LoggedInView currentUser={props.currentUser} />
      </div>
    </nav>
  );
}

export default Header;
