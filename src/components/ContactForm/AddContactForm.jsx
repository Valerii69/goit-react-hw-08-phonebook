import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useAddContactMutation } from 'redux/contacts/slice';
import { Loader } from 'components/Loader';
import { validatePattern, errorMessage } from 'constants';
import * as S from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(25)
    .matches(validatePattern.name, errorMessage.name)
    .required(),
  number: yup
    .string()
    .max(20)
    .matches(validatePattern.number, errorMessage.number)
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const AddContactForm = ({ contacts }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const [addContact, { isLoading: isAdding, isError }] =
    useAddContactMutation();

  useEffect(() => {
    if (isError) {
      toast.error(
        'Під час додавання контакту сталася помилка. Повторіть спробу пізніше.'
      );
    }
  }, [isError]);

  const onSubmit = async ({ name, number }) => {
    const normalizedName = name.trim();

    if (contactValidationByName(normalizedName)) {
      toast.error(`На щастя ${normalizedName} вже в контактах!`);
      return;
    }

    await addContact({ name: normalizedName, number });
    reset();
  };

  const contactValidationByName = newName => {
    return contacts.some(({ name }) => name === newName);
  };

  return (
    <S.ContactForm
      autoComplete="on"
      noValidate
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <S.Label>
        <S.TextLabel>Name</S.TextLabel>
        <S.Input {...register('name')} type="text" placeholder="Ім'я" />
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.TextLabel>Number</S.TextLabel>
        <S.Input
          {...register('number')}
          type="tel"
          placeholder="Номер телефону"
        />
        {errors.number && <S.ErrorText>{errors.number?.message}</S.ErrorText>}
      </S.Label>

      <S.Button type="submit" disabled={isAdding}>
        {isAdding ? (
          <Loader width="17" height="17" color="#fff" />
        ) : (
          'Додати контакт'
        )}
      </S.Button>
    </S.ContactForm>
  );
};

AddContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
