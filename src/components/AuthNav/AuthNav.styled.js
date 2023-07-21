import { NavLink } from 'react-router-dom';
import { IoIosRocket } from 'react-icons/io';
import { IoKeySharp } from 'react-icons/io5';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 32px;

  @media screen and (max-width: calc(680px - 1px)) {
    &.desktop {
      display: none;
    }
    gap: 12px;
  }
`;

export const SignUpIcon = styled(IoIosRocket)`
  width: 25px;
  height: 25px;
  fill: ${({ theme }) => theme.colors.accent};
`;

export const SignInIcon = styled(IoKeySharp)`
  width: 25px;
  height: 25px;
  fill: ${({ theme }) => theme.colors.accent};
`;

export const Thumb = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transition: border-color
    ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-style: normal;
  white-space: nowrap;
  font-weight: 700;
  /* font-size: 12px; */
  line-height: 1.5;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryText};

  &.active {
    & ${SignUpIcon}, ${SignInIcon} {
      fill: ${({ theme }) => theme.colors.secondaryText};
    }
    & ${Thumb} {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }

  &:hover:not(.active) ${Thumb} {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
