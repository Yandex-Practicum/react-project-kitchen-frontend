import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import menuItemStyles from './header.module.scss';

const {
  navItem,
  navLink,
  navLinkSelected,
  menuIcon,
  menuIconActive,
  profileIcon,
  profileIconActive,
} = menuItemStyles;

function MenuItem({ text, path, icon, isProfileIcon }) {
  const location = useLocation();

  return (
    <div>
      <li className={navItem}>
        <NavLink
          to={path}
          exact={path === '/'}
          className={navLink}
          activeClassName={navLinkSelected}
        >
          {isProfileIcon ? (
            <img
              src={icon}
              className={`${profileIcon}${
                location.pathname === path
                  ? ` ${profileIconActive}`
                  : ''
              }`}
              alt='img'
            />
          ) : (
            <img
              src={icon}
              className={`${menuIcon}${
                location.pathname === path
                  ? ` ${menuIconActive}`
                  : ''
              }`}
              alt='img'
            />
          )}
          {text}
        </NavLink>
      </li>
    </div>
  );
}
MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isProfileIcon: PropTypes.bool,
};

export default MenuItem;
