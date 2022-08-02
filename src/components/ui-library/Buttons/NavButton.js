import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styleButtons from './Buttons.module.scss';

const NavButton = ({
  icon, to = '/', exact = true, className = '', children = 'Кнопка',
}) => (
  <NavLink
    to={to}
    exact={exact}
    activeClassName={styleButtons.navigation_active}
    className={clsx(styleButtons.button, styleButtons.navigation, className)}
  >
    {icon && <icon.type />}
    <span>{children}</span>
  </NavLink>
);

NavButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  to: PropTypes.string,
  exact: PropTypes.bool,
  className: PropTypes.string,
};

export default NavButton;
