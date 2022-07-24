import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styleButtons from './Buttons.module.scss';

const Button = ({
  children, icon, type = 'default', disabled = false, active = false,
}) => {
  const types = { default: styleButtons.default, navigation: styleButtons.navigation };
  return (
    <button className={clsx(styleButtons.button, types[type] ? types[type] : '', active ? styleButtons.navigation_active : '')} disabled={disabled}>
      {icon}
      <span>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

export default Button;
