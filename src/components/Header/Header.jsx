import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';
import clsx from 'clsx';


const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className={clsx(style.nav, style.navbar_nav, style.pull_xs_right)}>

<       li className={style.nav_item}>
          <Link to="/" className={style.nav_link}>
            Главная
          </Link>
        </li>
        <li className={style.nav_item}>
          <Link to="/login" className={style.nav_link}>
            Войти
          </Link>
        </li>

        <li className={style.nav_item}>
          <Link to="/register" className={style.nav_link}>
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
      <ul className={clsx(style.nav, style.navbar_nav, style.pull_xs_right)}>

        <li className={style.nav_item}>
          <Link to="/" className={style.nav_link}>
          <i className="ion-home"></i>&nbsp;Главная
          </Link>
        </li>

        <li className={style.nav_item}>
          <Link to="/editor" className={style.nav_link}>
            <i className="ion-compose"></i>&nbsp;Новая запись
          </Link>
        </li>

        <li className={style.nav_item}>
          <Link to="/settings" className={style.nav_link}>
            <i className="ion-gear-a"></i>&nbsp;Настройки
          </Link>
        </li>

        <li className={style.nav_item}>
          <Link
            to={`/@${props.currentUser.username}`}
            className={style.nav_link}>
            <span>
              <img src={props.currentUser.image} alt="ava" className={style.ava_image}/>
              &nbsp;{props.currentUser.username}
            </span>
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

interface IHeader {
  currentUser?: () => void;
  appName?: string;
}

const Header: FC<IHeader> = (props) => {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <Link to="/" className={style.navbar_brand}>
          {props.appName.toLowerCase()}
        </Link>

        <LoggedOutView currentUser={props.currentUser} />

        <LoggedInView currentUser={props.currentUser} />
      </div>
    </nav>
  );
}

export default Header;
