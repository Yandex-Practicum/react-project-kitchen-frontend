import React from 'react';
import {Link} from 'react-router-dom';
import styles from './header.module.css';
import {HomeIcon} from "../../icons/home-icon/home-icon";
import {EnterIcon} from "../../icons/enter-icon/enter-icon";
import {AvatarIcon} from "../../icons/avatar-icon/avatar-icon";
import {SettingIcon} from "../../icons/setting-icon/setting-icon";
import {NewPost} from "../../icons/new-post/new-post";

const LoggedOutView = props => {
    if (!props.currentUser) {
        return (
            <ul className={styles.menu}>
                <li className="nav-item">
                    <div className={styles.block}>
                        <HomeIcon/>
                        <Link to="/" className={styles.item}>
                            Главная
                        </Link>
                    </div>
                </li>
                <li className="nav-item">
                    <div className={styles.block}>
                        <EnterIcon/>
                        <Link to="/login" className={styles.item}>
                            Войти
                        </Link>
                    </div>
                </li>
                <li className="nav-item">
                    <div className={styles.block}>
                        <Link to="/register" className={styles.item}>
                            Зарегистрироваться
                        </Link>
                    </div>
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
                    <div className={styles.block}>
                        <Link to="/" className={styles.item}>
                            Главная
                        </Link>
                    </div>
                </li>

                <li className="nav-item">
                    <div className={styles.block}>
                        <NewPost/>
                        <Link to="/editor" className={styles.item}>
                            Новая запись
                        </Link>
                    </div>
                </li>

                <li className="nav-item">
                    <div className={styles.block}>
                        <SettingIcon/>
                        <Link to="/settings" className={styles.item}>
                            Настройки
                        </Link>
                    </div>
                </li>

                <li className="nav-item">
                    <div className={styles.block}>
                        <AvatarIcon/>
                        <Link
                            to={`/@${props.currentUser.username}`}
                            className={styles.item}>
                            {props.currentUser.username}
                        </Link>
                    </div>
                </li>

            </ul>
        );
    }

    return null;
};

class Header extends React.Component {
    render() {
        return (
            <nav className={styles.wrapper}>
                <Link to="/" className={styles.logo}>
                    {this.props.appName}
                </Link>
                <div>
                    <LoggedOutView currentUser={this.props.currentUser}/>
                    <LoggedInView currentUser={this.props.currentUser}/>
                </div>
            </nav>
        );
    }
}

export default Header;
