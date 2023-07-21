import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { clearError } from 'redux/auth/sliceAuth';
import { logIn } from 'redux/auth/operationsAuth';
import { useAuth } from 'hooks';
import { Loader } from 'components/Loader';
import { validatePattern, errorMessage } from 'constants';
import * as S from './LoginForm.styled';

const schema = yup.object().shape({
  email: yup
    .string()
    .max(255)
    .matches(validatePattern.email, errorMessage.email)
    .required(),
  password: yup.string().min(8).max(255).required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
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
        'От халепа! Можливо, ваш пароль або адреса електронної пошти введено неправильно.'
      );
      dispatch(clearError());
    }
  }, [authError, dispatch]);

  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <S.LoginForm
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(data => {
        onSubmit(data);
      })}
    >
      <S.Title>Введіть адресу електронної пошти та пароль</S.Title>

      <S.Label>
        <S.TextLabel>Електронна пошта</S.TextLabel>
        <S.Input
          {...register('email')}
          type="email"
          placeholder="Ваша електронна пошта"
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
        {isLoading ? <Loader width="15" height="15" color="#fff" /> : 'Увійти'}
      </S.Button>

      <S.Text>
        Немає облікового запису?
        <S.SignInLink to="/register">Увійти</S.SignInLink>
      </S.Text>
    </S.LoginForm>
  );
};
