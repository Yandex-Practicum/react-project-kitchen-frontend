import React from 'react';
import { Link } from 'react-router-dom';
import ButtonTheme from '../ButtonTheme/ButtonTheme';
import styles from './Header.module.scss';
import clsx from 'clsx';
import HomeIcon from '../../assets/ico/HomeIcon';
import LoginIcon from '../../assets/ico/LoginIcon';
import LogoutIcon from '../../assets/ico/LogoutIcon';
import EditIcon from '../../assets/ico/EditIcon';
import { connect } from 'react-redux';
import { EDITOR_PAGE_LOADED, LOGOUT } from '../../constants/actionTypes';
import BaseAvatarIcon from '../../assets/ico/BaseAvatarIcon';

const { header, navbar, navbar_brand, nav, navbar_nav, pull_xs_right, nav_item, nav_link, ava_image } = styles;

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onClickLogout: () => {
    dispatch({ type: LOGOUT });
  },
});

const Header = (props) => {
  const clickEditHandler = () => {
    props.onLoad();
  };
  const clickLogoutHandler = () => {
    props.onClickLogout();
  };

  return (
    <header className={header}>
      <nav className={navbar}>
        <Link to="/" className={navbar_brand}>
          {props.appName.toLowerCase()}
        </Link>
        <ButtonTheme />
        <ul className={clsx(nav, navbar_nav, pull_xs_right)}>
          <li className={nav_item}>
            <Link to="/" className={nav_link}>
              <HomeIcon />
              <span>Главная</span>
            </Link>
          </li>
          {!props.currentUser && (
            <li className={nav_item}>
              <Link to="/login" className={nav_link}>
                <LoginIcon /> <span>Войти</span>
              </Link>
            </li>
          )}
          {props.currentUser && (
            <>
              <li className={nav_item}>
                <Link to="/editor" className={nav_link} onClick={clickEditHandler}>
                  <EditIcon />
                  <span>Новая запись</span>
                </Link>
              </li>
              <li className={nav_item}>
                <Link to={`/profile/${props.currentUser.username}`} className={nav_link}>
                  {props.currentUser.image && <img src={props.currentUser.image} alt="ava" className={ava_image} />}
                  {!props.currentUser.image && <BaseAvatarIcon />}
                  &nbsp;<p>{props.currentUser.username}</p>
                </Link>
              </li>
              <li className={nav_item}>
                <Link to="/" className={nav_link} onClick={clickLogoutHandler}>
                  <LogoutIcon />
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default connect(null, mapDispatchToProps)(Header);
