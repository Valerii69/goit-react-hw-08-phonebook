import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  useUpdateContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/slice';
import { Loader } from 'components/Loader';
import { validatePattern, errorMessage } from 'constants';
import * as S from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(255)
    .matches(validatePattern.name, errorMessage.name),
  number: yup
    .string()
    .max(20)
    .matches(validatePattern.number, errorMessage.number),
});

const initialValues = {
  name: '',
  number: '',
};

export const EditContactForm = ({ id, name: oldName, number: oldNumber }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const [updateContact, { isLoading: isUpdating, isError }] =
    useUpdateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  useEffect(() => {
    if (isError) {
      toast.error(
        'Під час оновлення контакту сталася помилка. Повторіть спробу пізніше.'
      );
    }
  }, [isError]);

  const onSubmit = async ({ name, number }) => {
    const normalizedName = name.trim();

    let data = {};

    if (normalizedName) {
      if (contactValidationName(normalizedName)) {
        return;
      }
      data.name = normalizedName;
    }

    if (number) {
      if (contactValidationNumber(number)) {
        return;
      }
      data.number = number;
    }

    await updateContact({ id, data });

    reset();
  };

  const contactValidationName = newName => {
    if (newName === oldName) {
      toast.error('Ви ввели старе ім"я');
      return true;
    }

    if (contacts.some(({ name }) => name === newName)) {
      toast.error(`${newName} вже в контактах.`);
      return true;
    }

    return false;
  };

  const contactValidationNumber = newNumber => {
    if (newNumber === oldNumber) {
      toast.error('Ви ввели старий номер телефону.');
      return true;
    }

    return false;
  };

  return (
    <S.ContactForm
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <S.Label>
        <S.TextLabel>Current name: {oldName}</S.TextLabel>
        <S.Input {...register('name')} type="text" placeholder="Нове ім'я" />
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.TextLabel>Current number: {oldNumber}</S.TextLabel>
        <S.Input
          {...register('номер')}
          type="tel"
          placeholder="Новий номер телефону"
        />
        {errors.number && <S.ErrorText>{errors.number?.message}</S.ErrorText>}
      </S.Label>

      <S.Button type="submit" disabled={isUpdating}>
        {isUpdating ? (
          <Loader width="15" height="15" color="#fff" />
        ) : (
          'Редагувати контакт'
        )}
      </S.Button>
    </S.ContactForm>
  );
};

EditContactForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
