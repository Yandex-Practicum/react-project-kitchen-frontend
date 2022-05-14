import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { FC } from "react";
import * as Styles from "../StyledComponents/modalStyles/modalStyles";
interface IModal {
  title?: string;
  onClose: any;
  deleteArticle?: any;
}

const modalRoot = document.getElementById("modal-root");

const Modal: FC<IModal> = ({ title, onClose, deleteArticle }) => {
  if (!modalRoot) {
    throw new Error("The element #portal wasn't found");
  }

  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.key === "Escape") {
        onClose(e);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return createPortal((
    <>
      <ModalOverlay onClick={onClose} />
      <Styles.ModalContainer>
        <Styles.ModalHeading>{title}</Styles.ModalHeading>
        <Styles.ModalSubHeading>
          {'Нажимая кнопку «Удалить запись», материал будет удален без возможности восстановления'}
        </Styles.ModalSubHeading>

        <Styles.ModalButtonClose onClick={onClose}>
        </Styles.ModalButtonClose>

        <Styles.ModalButtonSubmit onClick={deleteArticle}>
         {'Удалить запись'}
        </Styles.ModalButtonSubmit>
      </Styles.ModalContainer>
    </>

  ), modalRoot
  )
};

export default Modal;
