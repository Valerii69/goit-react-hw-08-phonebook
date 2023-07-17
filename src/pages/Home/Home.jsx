import { useAuth } from 'hooks';
import * as S from './Home.styled';

const Home = () => {
  const {
    user: { name },
    isLoggedIn,
  } = useAuth();

  return (
    <S.Section>
      <S.SectionTitle>Телефонна книга домашня сторінка</S.SectionTitle>
      {isLoggedIn ? (
        <S.Title>Вітаю, {name}!</S.Title>
      ) : (
        <S.Title>Вітаю, друже!</S.Title>
      )}
      <S.Text>
        Створи для себе книгу контактів, яка завжди з вами!
        {/* Ця програма створена за допомогою: React.js, React Router
        Dom, Redux Toolkit, Redux Persist, ChakraUI, Axios та інші. */}
      </S.Text>
    </S.Section>
  );
};

export default Home;
