import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { FC } from "react";
import * as Styles from "../StyledComponents/modalStyles/modalStyles";
import IconClose from "../../UI/icon-close/icon-close";
// interface IModal {
//   title?: string;
//   onClose: () => void;
// }
const modalRoot = document.getElementById('modal-root')

const Modal = ({ title, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <Styles.ModalContainer>
        <Styles.ModalHeading>{title}</Styles.ModalHeading>
        <Styles.ModalSubHeading>
          {'Нажимая кнопку «Удалить запись», материал будет удален без возможности восстановления'}
        </Styles.ModalSubHeading>

        <Styles.ModalButtonClose onClick={onClose}>
          <IconClose />
        </Styles.ModalButtonClose>

        <Styles.ModalButtonSubmit>
         {'Удалить запись'}
        </Styles.ModalButtonSubmit>
      </Styles.ModalContainer>
    </>
     ,modalRoot
  );
};

export default Modal;
