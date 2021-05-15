import React from 'react';
import PropTypes from 'prop-types';
import {ButtonWrapper} from './style.js';


function Button({caption, onClick, icon, danger, className}) {
  
  return (
    <ButtonWrapper      
      danger={danger}
      onClick={onClick}
      className={`pt-2 pb-2 pr-6 pl-6 ${className}`}>
        {icon && <img src={icon} alt={icon} className="pr-2" />}
      <span className="text text_type_main-default">{caption}</span>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  icon: PropTypes.string,
  danger: PropTypes.bool,
  className: PropTypes.string
}

export default Button;
