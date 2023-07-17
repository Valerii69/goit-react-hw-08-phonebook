import styled from 'styled-components';
import backgroundImg from 'images/background.jpg';
// import backgroundImg2x from 'images/backgroundCube@2x.jpg';

export const Section = styled.section`
  background-image: url(${backgroundImg});
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  background-size: cover;
  background-position: center center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
    rgba(0, 0, 0, 0.16) 1px 4px 6px;
  height: 50vw;

  &::after {
    content: '';
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: -1;
    display: block;

    /* width: 260px;
    height: 260px; */
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    border-radius: 15px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
      top: 24px;
      right: 24px;
      padding-left: 48px;
      padding-right: 48px;
    }
  }
`;

export const Title = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const Text = styled.p`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primary};
`;
