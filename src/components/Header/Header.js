import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className={styles.nav}>

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

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className={styles.nav}>

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
            <i className="ion-gear-a"></i>&nbsp;Настройка
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            <span>Hello, {props.currentUser.username}</span>
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
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
