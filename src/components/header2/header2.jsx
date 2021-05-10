import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/header/logo.png";
import {
  HeaderNavbar,
  HeaderContainer,
  HeaderLink,
  HeaderLinks,
  HeaderLinkActive,
} from "./style";

import { useLocation, useHistory } from "react-router-dom";
import { locationsAreEqual } from "history";

import homeIcon from "../../images/header/home.png";
import homeIconActive from "../../images/header/home_active.png";
import loginIcon from "../../images/header/login.png";
import loginIconActive from "../../images/header/login_active.png";
import postIcon from "../../images/header/post.png";
import postIconActive from "../../images/header/post_active.png";
import settingsIcon from "../../images/header/settings.png";
import settingsIconActive from "../../images/header/settings_active.png";
import avatar from "../../images/header/avatar.png";

const LoggedOutView = (props) => {
  if (!props.currentUser) {
    return (
      <HeaderLinks>
        <HeaderLink isActive={props.location === "/"}>
          <img
            src={props.location === "/" ? homeIconActive : homeIcon}
            alt="главная"
          />
          <Link to="/"> Главная</Link>
        </HeaderLink>

        <HeaderLink
          isActive={
            props.location === "/login" || props.location === "/register"
          }
        >
          <img
            src={
              props.location === "/login" || props.location === "/register"
                ? loginIconActive
                : loginIcon
            }
            alt="логин"
          />
          <Link to="/login">Войти</Link>
        </HeaderLink>
      </HeaderLinks>
    );
  }
  return null;
};

const LoggedInView = (props) => {
  if (props.currentUser) {
    return (
      <HeaderLinks>
        <HeaderLink isActive={props.location === "/"}>
          <img
            src={props.location === "/" ? homeIconActive : homeIcon}
            alt="главная"
          />
          <Link to="/"> Главная</Link>
        </HeaderLink>

        <HeaderLink isActive={props.location === "/editor"}>
          <img
            src={props.location === "/editor" ? postIconActive : postIcon}
            alt="новая запись"
          />
          <Link to="/editor"> Новая запись</Link>
        </HeaderLink>

        <HeaderLink isActive={props.location === "/settings"}>
          <img
            src={
              props.location === "/settings" ? settingsIconActive : settingsIcon
            }
            alt="настройки"
          />
          <Link to="/settings"> Настройки </Link>
        </HeaderLink>

        <HeaderLink
          isActive={props.location === `/@${props.currentUser.username}`}
        >
          {/* TODO: сюда помещать аватарку, которую выбрал пользователь из списка, когда добавим эту функцию в личный кабинет*/}
          <img src={avatar} alt="аватар" />
          <Link to={`/@${props.currentUser.username}`}>
            {" "}
            {props.currentUser.username}{" "}
          </Link>
        </HeaderLink>
      </HeaderLinks>
    );
  }

  return null;
};

function Header2(props) {
  let location = useLocation().pathname;
  return (
    <HeaderNavbar>
      <HeaderContainer>
        <Link to="/" className="navbar-brand">
          <img src={logo} />
        </Link>

        <LoggedOutView location={location} currentUser={props.currentUser} />
        <LoggedInView location={location} currentUser={props.currentUser} />
      </HeaderContainer>
    </HeaderNavbar>
  );
}

export default Header2;
