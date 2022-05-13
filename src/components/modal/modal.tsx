import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import * as Styles from "../StyledComponents/modalStyles/modalStyles";
import { FC } from "react";

interface IModal {
  title?: string;
  onClose: () => void;
  
}

const modalRoot = document.getElementById('modal-root') ;


const Modal: FC<IModal> = ({ title, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if(modalRoot !== null) {
    return createPortal(
      <>
        <ModalOverlay onClick={onClose} />
        <Styles.ModalContainer>
          <Styles.ModalHeading>{title}</Styles.ModalHeading>
          <Styles.ModalSubHeading>
            {'Нажимая кнопку «Удалить запись», материал будет удален без возможности восстановления'}
          </Styles.ModalSubHeading>
  
          <Styles.ModalButtonClose onClick={onClose}>
          </Styles.ModalButtonClose>
  
          <Styles.ModalButtonSubmit>
           {'Удалить запись'}
          </Styles.ModalButtonSubmit>
        </Styles.ModalContainer>
      </>, 
      modalRoot
    )

  } else return null

}

export default Modal;
