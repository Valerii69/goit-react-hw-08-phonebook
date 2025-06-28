import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { clearError } from 'redux/auth/sliceAuth';
import { register as registerUser } from 'redux/auth/operationsAuth';
import { Loader } from 'components/Loader';
import { useAuth } from 'hooks';
import { validatePattern, errorMessage } from 'constants';
import * as S from './RegisterForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    // .trim()
    .min(2)
    .max(255)
    .matches(validatePattern.name, errorMessage.name)
    .required(),
  email: yup
    .string()
    .max(255)
    .matches(validatePattern.email, errorMessage.email)
    .required(),
  password: yup
    .string()
    .max(255)
//уточнити умови!!!
    .matches(validatePattern.password, errorMessage.password) 
    .required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { isLoading, error: authError } = useAuth();

  useEffect(() => {
    if (authError) {
      toast.error(
        'Щось пішло не так. Можливо, уже є користувач з цією електронною адресою.'
      );
      dispatch(clearError());
    }
  }, [authError, dispatch]);

  const onSubmit = ({ name, email, password }) => {
    const normalizedName = name.trim();

    dispatch(registerUser({ name: normalizedName, email, password }));
    reset();
  };

  return (
    <S.RegisterForm
      autoComplete="on"
      noValidate
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <S.Title>Реєстрація</S.Title>

      <S.Label>
        <S.TextLabel>Ім'я</S.TextLabel>
        <S.Input
          {...register('name')}
          type="text"
          placeholder="Ваше повне ім'я"
        />
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.TextLabel>Пошта</S.TextLabel>
        <S.Input
          {...register('email')}
          type="email"
          placeholder="Ваша електронна адреса"
        />
        {errors.email && <S.ErrorText>{errors.email?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.TextLabel>Пароль</S.TextLabel>
        <S.Input
          {...register('password')}
          type="password"
          placeholder="Ваш пароль"
        />
        {errors.password && (
          <S.ErrorText>{errors.password?.message}</S.ErrorText>
        )}
      </S.Label>

      <S.Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <Loader width="15" height="15" color="#ffffff" />
        ) : (
          'Реєстрація'
        )}
      </S.Button>

      <S.Text>
        Вже є аккаунт?
        <S.SignInLink to="/login">Увійти</S.SignInLink>
      </S.Text>
    </S.RegisterForm>
  );
};
