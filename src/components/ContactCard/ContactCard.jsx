import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/sliceContacts';
import { Modal } from 'components/Modal';
import * as S from './ContactCard.styled';

export const ContactCard = ({ contactId, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isError }] =
    useDeleteContactMutation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (isError) {
      toast.error(
        'Під час видалення контакту сталася помилка. Повторіть спробу пізніше.'
      );
    }
  }, [isError]);

  const handleDeleteContact = async contactId => {
    await deleteContact(contactId);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <S.ContactCard>
      <S.Name>{name}</S.Name>
      <S.Number>
        Номер телефона:
        <span>{number}</span>
      </S.Number>

      <S.List>
        <li>
          <S.Button
            type="button"
            onClick={() => handleDeleteContact(contactId)}
            disabled={isDeleting}
            className="delete"
          >
            <S.DeleteIcon />
            Видалити
          </S.Button>
        </li>
        <li>
          <S.Button type="button" className="edit" onClick={handleOpenModal}>
            <S.EditIcon />
            Змінити
          </S.Button>
        </li>
      </S.List>
      {isOpenModal && (
        <Modal
          id={contactId}
          name={name}
          number={number}
          onCloseModal={handleCloseModal}
        />
      )}
    </S.ContactCard>
  );
};

ContactCard.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
