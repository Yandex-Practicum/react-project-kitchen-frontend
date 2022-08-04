import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import menuItemStyles from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_MOBILE_MENU } from '../../constants/actionTypes';

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
  const dispatch = useDispatch();

  const isMobileMenuOpen = useSelector((state) => state.header.isMobileMenuOpen);

  function closeMobileMenu() {
    if (isMobileMenuOpen) {
      dispatch({ type: TOGGLE_MOBILE_MENU, payload: !isMobileMenuOpen });
    }
  }

  return (
    <div>
      <li className={navItem}>
        <NavLink
          to={path}
          exact={path === '/'}
          className={navLink}
          activeClassName={navLinkSelected}
          onClick={closeMobileMenu}
        >
          {isProfileIcon ? (
            <img
              src={icon}
              className={`${profileIcon}${
                location.pathname === path ? ` ${profileIconActive}` : ''
              }`}
              alt='img'
            />
          ) : (
            <img
              src={icon}
              className={`${menuIcon}${location.pathname === path ? ` ${menuIconActive}` : ''}`}
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
