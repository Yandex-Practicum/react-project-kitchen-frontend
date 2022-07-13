import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import menuItemStyles from './header.module.css';

const {
  navItem,
  navLink,
  navLinkSelected,
  menuIcon,
  menuIconActive,
  profileIcon,
  profileIconActive,
} = menuItemStyles;

function MenuItem({
  text, path, icon, isProfileIcon,
}) {
  const location = useLocation();

  return (
    <>
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
                location.pathname === path ? ` ${profileIconActive}` : ''
              }`}
            />
          ) : (
            <img
              src={icon}
              className={`${menuIcon}${
                location.pathname === path ? ` ${menuIconActive}` : ''
              }`}
            />
          )}
          {text}
        </NavLink>
      </li>
    </>
  );
}
MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isProfileIcon: PropTypes.bool,
};

export default MenuItem;
