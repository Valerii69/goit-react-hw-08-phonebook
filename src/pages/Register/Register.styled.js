import styled from 'styled-components';
import backgroundImg from 'images/background.jpg';

export const Section = styled.section`
  padding: 24px;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  top: 12px;

  z-index: -1;
  display: block;

  height: 50vw;
`;

export const Title = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  margin: -1px;
`;

export const Text = styled.p`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;
