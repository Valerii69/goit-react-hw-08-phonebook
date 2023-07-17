import { useFetchContactsQuery } from 'redux/contacts/slice';
import { AddContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loader';
import * as S from './Contacts.styled';

const Contacts = () => {
  const { data, isSuccess, isFetching, isError } = useFetchContactsQuery();

  if (isError) {
    return (
      <S.Section>
        <S.ErrorText>
          Тривають технічні роботи. Просимо вибачення за тимчасові незручності.
        </S.ErrorText>
      </S.Section>
    );
  }

  return (
    <S.Section>
      <S.SectionTitle>Телефонна книга</S.SectionTitle>

      <AddContactForm contacts={data} />

      <S.ContactsContainer>
        <S.TextBox>
          <S.Title>Контакти</S.Title>
          {isFetching && <Loader width="20" height="20" color="#1B365C" />}
        </S.TextBox>

        <Filter />
        {isSuccess && data.length ? (
          <ContactList contacts={data} />
        ) : (
          <S.Text>
            У вас немає контактів. Додайте контакти, щоб вони з’явилися тут.
          </S.Text>
        )}
      </S.ContactsContainer>
    </S.Section>
  );
};

export default Contacts;
