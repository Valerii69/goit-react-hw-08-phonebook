import { useAuth } from 'hooks';
import * as S from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <S.List>
        <li>
          <S.Link to="/">
            <S.Thumb>
              <S.HomeIcon />
            </S.Thumb>
            Головна
          </S.Link>
        </li>
        {isLoggedIn && (
          <li>
            <S.Link to="/contacts">
              <S.Thumb>
                <S.ContactsIcon />
              </S.Thumb>
              Контакти
            </S.Link>
          </li>
        )}
      </S.List>
    </nav>
  );
};
