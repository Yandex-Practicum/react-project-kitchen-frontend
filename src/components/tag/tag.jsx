import React from 'react';
import PropTypes from 'prop-types';
import {TagWrapper} from './style.js';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import agent from '../../agent';


function Tag({caption, onClickTag, onDelete, clickable=true, remove = false, active = false}) {
  const handleClick = ev => {
    ev.preventDefault();
    onClickTag && onClickTag(caption, page => agent.Articles.byTag(caption, page), agent.Articles.byTag(caption));
  };
  return (
    <TagWrapper
      active={active}
      clickable={clickable}  
      onClick={handleClick}
      className="pl-2 pr-2 pt-1 pb-1 text text_type_main-default">
      {caption}
      {remove && <CloseIcon type="primary" onClick={onDelete} />}
    </TagWrapper>
  );
}

Tag.propTypes = {
  caption: PropTypes.string.isRequired,
  onClickTag: PropTypes.func,
  onDelete: PropTypes.func,
  remove: PropTypes.any,
  active: PropTypes.any,
  clickable: PropTypes.any
}

export default Tag;
