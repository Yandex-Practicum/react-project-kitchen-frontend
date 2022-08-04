import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import currentUserType from '../../utils/types';
import NotLoggedNav from './NotLoggedNav';
import LoggedNav from './LoggedNav';
import headerStyles from './header.module.scss';
import MobileMenuIcon from '../ui-library/Icons/MobileMenuIcon';
import { TOGGLE_MOBILE_MENU } from '../../constants/actionTypes';
import { useDispatch, useSelector } from 'react-redux';

const {
  container,
  navLogo,
  nav,
  header,
  mobileNav,
  mobileNav_opened,
  button_type_mobile,
  header__mobile,
} = headerStyles;

const Header = ({ appName, currentUser }) => {
  const currentNav = currentUser ? <LoggedNav currentUser={currentUser} /> : <NotLoggedNav />;

  const dispatch = useDispatch();

  const isMobileMenuOpen = useSelector((state) => state.header.isMobileMenuOpen);

  function toggleMobileMenu() {
    dispatch({ type: TOGGLE_MOBILE_MENU, payload: !isMobileMenuOpen });
  }

  return (
    <>
      <nav className={`navbar navbar-light ${container}`}>
        <div className={`container ${header}`}>
          <Link to='/' className={navLogo}>
            {appName}
          </Link>

          <ul className={`nav navbar-nav pull-xs-right ${nav}`}>{currentNav}</ul>
          <button onClick={toggleMobileMenu} className={button_type_mobile}>
            <MobileMenuIcon />
          </button>
        </div>
      </nav>

      <div className={`${header__mobile} ${isMobileMenuOpen ? mobileNav_opened : ''}`}>
        <ul className={mobileNav}>{currentNav}</ul>
      </div>
    </>
  );
};

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  currentUser: currentUserType,
};

export default Header;
