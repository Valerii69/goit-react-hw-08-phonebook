import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { EditContactForm } from 'components/ContactForm';
import * as S from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onCloseModal, ...otherProps }) => {
  useEffect(() => {
    const handleCloseModal = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [onCloseModal]);

  return createPortal(
    <S.Backdrop>
      <S.Modal>
        <S.Button type="button" onClick={onCloseModal}>
          <S.CloseIcon />
        </S.Button>
        <EditContactForm {...otherProps} />
      </S.Modal>
    </S.Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  otherProps: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
