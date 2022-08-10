import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Buttons.module.scss';

const Button = ({
  icon,
  onClick,
  type = 'primary',
  disabled = false,
  className = '',
  children = 'Кнопка',
}) => {
  const types = {
    primary: styles.primary,
    outline_alert: styles.outline_alert,
  };

  return (
    <button
      className={clsx(className, styles.button, types[type] ? types[type] : '')}
      disabled={disabled}
      onClick={onClick}
      type='button'
    >
      {icon && <icon.type />}
      <span>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
