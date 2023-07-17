import PropTypes from 'prop-types';
import * as S from './MobileMenu.styled';

export const MobileMenu = ({ isOpenMenu, children }) => {
  return (
    <S.Container className={isOpenMenu ? 'active' : ''}>{children}</S.Container>
  );
};

MobileMenu.propTypes = {
  isOpenMenu: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
