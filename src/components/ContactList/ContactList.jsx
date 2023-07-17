import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectFilter } from 'redux/filter/selectors';
import { ContactCard } from 'components/ContactCard';
import * as S from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <S.List>
      {visibleContacts.map(({ id, name, number }) => (
        <S.Item key={id}>
          <ContactCard contactId={id} name={name} number={number} />
        </S.Item>
      ))}
    </S.List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
