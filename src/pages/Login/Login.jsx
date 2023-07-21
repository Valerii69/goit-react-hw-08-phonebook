import { LoginForm } from 'components/LoginForm';
import * as S from './Login.styled';

const Login = () => (
  <S.Section>
    <S.Title>Реєстрація</S.Title>
    <S.Text>Вітаю!</S.Text>
    <LoginForm />
  </S.Section>
);

export default Login;
