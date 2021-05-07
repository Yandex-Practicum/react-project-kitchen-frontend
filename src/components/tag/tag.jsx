import React from 'react';
import PropTypes from 'prop-types';
import {TagWrapper} from './style.js';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';


function Tag({caption, onClick, remove = false, active = false}) {
  
  return (
    <TagWrapper
      active={active}  
      onClick={onClick}
      className="pl-2 pr-2 pt-1 pb-1 text text_type_main-default">
      {caption}
      {remove && <CloseIcon type="primary" />}
    </TagWrapper>
  );
}

Tag.propTypes = {
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  remove: PropTypes.boolean,
  active: PropTypes.boolean
}

export default Tag;
