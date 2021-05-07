import React from 'react';
import PropTypes from 'prop-types';
import {ButtonWrapper} from './style.js';


function Button({caption, onClick}) {
  
  return (
    <ButtonWrapper onClick={onClick} className="pt-2 pb-2 pr-4 pl-4">
      <span className="text text_type_main-default">{caption}</span>
    </ButtonWrapper>
  );
}

Button.prototype = {
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
}

export default Button;
