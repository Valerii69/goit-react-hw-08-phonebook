import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { clearError } from 'redux/auth/sliceAuth';
import { logOut } from 'redux/auth/operationsAuth';
import { useAuth } from 'hooks';
import { Loader } from 'components/Loader';
import * as S from './UserMenu.styled';

export const UserMenu = ({ className }) => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useAuth();

  useEffect(() => {
    if (error) {
      toast.error('Щось пішло не так, спробуйте пізніше.');
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <S.Container className={className}>
      <S.Email>{user.email}</S.Email>
      <S.Logout type="button" onClick={handleClick} disabled={isLoading}>
        <S.Thumb>
          {isLoading ? (
            <Loader width="25" height="25" color="#1B365C" />
          ) : (
            <S.LogoutIcon />
          )}
        </S.Thumb>
        Вихід
      </S.Logout>
    </S.Container>
  );
};

UserMenu.propTypes = {
  className: PropTypes.string,
};
