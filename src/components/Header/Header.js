import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import currentUserType from '../../utils/types';
import NotLoggedNav from './NotLoggedNav';
import LoggedNav from './LoggedNav';
import headerStyles from './header.module.scss';

const { container, navLogo, nav, header } = headerStyles;

const Header = ({ appName, currentUser }) => (
  <nav className={`navbar navbar-light ${container}`}>
    <div className={`container ${header}`}>
      <Link to='/' className={navLogo}>
        {appName}
      </Link>

      <ul className={`nav navbar-nav pull-xs-right ${nav}`}>
        {currentUser ? (
          <LoggedNav currentUser={currentUser} />
        ) : (
          <NotLoggedNav />
        )}
      </ul>
    </div>
  </nav>
);

Header.propTypes = {
  appName: PropTypes.string.isRequired,
  currentUser: currentUserType,
};

export default Header;
