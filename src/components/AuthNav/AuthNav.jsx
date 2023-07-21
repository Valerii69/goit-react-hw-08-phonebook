import PropTypes from 'prop-types';
import * as S from './AuthNav.styled';

export const AuthNav = ({ className }) => (
  <S.List className={className}>
    <li>
      <S.Link to="/register">
        <S.Thumb>
          <S.SignUpIcon />
        </S.Thumb>
        Реєстрація
      </S.Link>
    </li>
    <li>
      <S.Link to="/login">
        <S.Thumb>
          <S.SignInIcon />
        </S.Thumb>
        Увійти
      </S.Link>
    </li>
  </S.List>
);

AuthNav.propTypes = {
  className: PropTypes.string,
};
