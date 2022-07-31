import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styleButtons from './Buttons.module.scss';

const Button = ({
  icon,
  onClick,
  type = 'primary',
  disabled = false,
  className = '',
  children = 'Кнопка',
}) => {
  const types = {
    primary: styleButtons.primary,
    outline_alert: styleButtons.outline_alert,
  };

  return (
    <button
      type='button'
      className={clsx(className, styleButtons.button, types[type] ? types[type] : '')}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <icon.type />}
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
