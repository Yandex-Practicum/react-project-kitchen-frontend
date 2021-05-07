import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Modal from '../modal';

const modalRoot = document.getElementById("modals");
 
const ImageView = ({img, onClose}) => {
  return ReactDOM.createPortal(
    (
      <Modal {...{onClose}}>
        <img src={img} alt={img} style={{maxHeight: 'calc(100vh - 150px)'}}/>
      </Modal>
    ), modalRoot
  );
}

ImageView.propTypes = {
  onClose: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired
}
 
export default ImageView;
