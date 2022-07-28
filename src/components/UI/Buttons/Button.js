import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styleButtons from './Buttons.module.scss';

const Button = ({
  children,
  icon,
  onClick,
  type = 'default',
  disabled = false,
  active = false,
  className = '',
}) => {
  const types = {
    default: styleButtons.default,
    navigation: styleButtons.navigation,
    outline: styleButtons.outline,
  };

  return (
    <button
      className={clsx(
        className,
        styleButtons.button,
        types[type] ? types[type] : '',
        active ? styleButtons.navigation_active : '',
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <icon.type color='secondary' hoverColor='primary' />}
      <span>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
