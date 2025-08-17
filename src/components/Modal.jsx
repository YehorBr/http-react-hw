import { useEffect } from 'react';
import { ModalWrapper, Overlay } from './modal.styled';


export const Modal = ({ image, closeModal }) => {
  const onOverlayClick = (e) => {
    if(e.target === e.currentTarget){
      closeModal()
    }
  };

  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  }, [closeModal]);

  return (
    <Overlay onClick={onOverlayClick}>
      <ModalWrapper>
        <img src={image} alt="" />
      </ModalWrapper>
    </Overlay>
  );
};
