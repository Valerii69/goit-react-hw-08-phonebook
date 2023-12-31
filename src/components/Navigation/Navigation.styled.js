import { NavLink } from 'react-router-dom';
import { ImAddressBook } from 'react-icons/im';
import { IoHome } from 'react-icons/io5';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 12px;

  @media screen and (min-width: 680px) {
    gap: 32px;
  }
`;

export const HomeIcon = styled(IoHome)`
  width: 25px;
  height: 25px;
  fill: ${({ theme }) => theme.colors.accent};
`;

export const ContactsIcon = styled(ImAddressBook)`
  width: 25px;
  height: 25px;
  fill: ${({ theme }) => theme.colors.accent};
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transition: border-color
    ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 1.5;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryText};

  &.active {
    & ${HomeIcon} {
      fill: ${({ theme }) => theme.colors.primary};
    }

    & ${ContactsIcon} {
      fill: ${({ theme }) => theme.colors.primary};
    }

    & ${Thumb} {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }

  &:hover:not(.active) ${Thumb} {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
