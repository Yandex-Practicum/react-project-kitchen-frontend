import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className={styles.nav}>

        <li className={styles.item}>
          <Link to="/" className={styles.link}>

            Главная
          </Link>
        </li>

        <li className={styles.item}>
          <Link to="/login" className={`${styles.link} ${styles.login}`}>
            Войти
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
      <ul className={styles.nav}>

        <li className={styles.item}>
          <Link to="/" className={`${styles.link} ${styles.home}`}>
            Главная
          </Link>
        </li>

        <li className={styles.item}>
          <Link to="/editor" className={`${styles.link} ${styles.post}`}>
            Новая запись
          </Link>
        </li>

        <li className={styles.item}>
          <Link to="/settings" className={`${styles.link} ${styles.settings}`}>
            Настройка
          </Link>
        </li>

        <li className={styles.item}>
          <Link
            to={`/@${props.currentUser.username}`}
            className={`${styles.link} ${styles.user}`}>
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className={styles.header}>
        <div className={styles.container}>

          <Link to="/" className={styles.title}>
            {this.props.appName}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
