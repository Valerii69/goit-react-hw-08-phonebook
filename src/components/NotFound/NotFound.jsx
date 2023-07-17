import * as S from './NotFound.styled';

export const NotFound = () => (
  <S.Container>
    <S.ErrorMessage>Відсутня сторінка</S.ErrorMessage>
    <S.ErrorCode>Помилка 404</S.ErrorCode>
    <S.HomePageLink to="/">Стартова сторінка</S.HomePageLink>
  </S.Container>
);
