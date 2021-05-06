import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Container, ModalWrapper, ModalHeader, CloseButton} from './style';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay';
 
const Modal = ({caption, children, onClose}) => {
  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        onClose();
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
  },[onClose])

  return (
    <React.Fragment>
      <Container
        onClick={function(e) {
          e.stopPropagation();
        }}>
        <ModalWrapper className={`pl-5 pt-5 pr-5 pb-5`}>
          <ModalHeader>
            <span className="text text_type_main-large">{caption}</span>
            <CloseButton onClick={function(e) {
              e.stopPropagation();
              onClose && onClose();
            }}>
              <CloseIcon/>
            </CloseButton>          
          </ModalHeader>
          <div>
            {children}
          </div>
        </ModalWrapper>
      </Container>
    <ModalOverlay onClick={onClose}/>
    </React.Fragment>
  );
}

Modal.propTypes = {
  caption: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};
 
export default Modal;
