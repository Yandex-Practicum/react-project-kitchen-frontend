import React from 'react';
import PropTypes from 'prop-types';
import stylesButton from './Button.module.css';

const Button = ({ onClick, isActive, title, icon }) => {
  const buttonAddStyle = isActive ? stylesButton.active : stylesButton.inactive;

  return (
    <button
      className={`${stylesButton.button} ${buttonAddStyle}`}
      type="submit"
      onClick={onClick}
    >
      {icon}
      {title}
    </button>
  );
};

Button.propTypes = {
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  icon: null,
};

export default Button;
