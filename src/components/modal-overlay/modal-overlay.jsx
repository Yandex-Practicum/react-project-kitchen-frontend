import React from 'react';
import PropTypes from 'prop-types';
import {Overlay} from './style';
 
const ModalOverlay = ({onClick}) => {
  return (
    <Overlay
      onClick={function(e) {
        e.stopPropagation();
        onClick && onClick();
      }}>
    </Overlay>
  );
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired
};
 
export default ModalOverlay;
