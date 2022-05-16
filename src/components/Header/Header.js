import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import mainIcon from "../../images/mainIcon.svg";
import signInIcon from "../../images/signInIcon.svg";
import clsx from "clsx";

const LoggedOutView = (props) => {
  if (!props.currentUser) {
    return (
      <ul className={styles.nav}>
        <li className={styles.nav_item}>
          <Link to="/" className={styles.link}>
            <img
              className={styles.icon}
              src={mainIcon}
              alt="Иконка перейти на главную"
            />
            Главная
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link to="/login" className={clsx(styles.link, styles.link_purple)}>
            <img
              className={styles.icon}
              src={signInIcon}
              alt="Иконка перейти на страницу входа в лк"
            />
            Войти
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = (props) => {
  if (props.currentUser) {
    return (
      <ul className={styles.nav}>
        <li className={styles.nav_item}>
          <Link to="/" className={styles.link}>
            <img
              className={styles.icon}
              src={mainIcon}
              alt="Иконка перейти на главную"
            />
            Главная
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`/@${props.currentUser.username}`} className="nav-link">
            <span>Hello, {props.currentUser.username}</span>
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

const Header = ({ appName, currentUser }) => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          {appName}
        </Link>
        <div className={styles.wrapper}>
          <LoggedOutView currentUser={currentUser} />
          <LoggedInView currentUser={currentUser} />
        </div>
      </div>
    </section>
  );
};

export default Header;
