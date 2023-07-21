import styled from 'styled-components';
import backgroundImg from 'images/background.jpg';
// import backgroundImg2x from 'images/backgroundCube@2x.jpg';

export const Section = styled.section`
  display: flex;
  padding-top: 150px;
  padding-bottom: 150px;
  padding-left: auto;
  padding-right: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImg});
  width: 50%vw;
  height: 50%vw;

  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  &::after {
    content: '';
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: -1;
    display: block;
    width: calc(100% - 12px);
    height: calc(100% - 12px);

    @media screen and (min-width: 680px) {
      top: 24px;
      right: 24px;
      padding-top: 100px;
      padding-left: 48px;
      padding-right: 48px;
      margin-top: 150px;
    }

    @media screen and (min-width: 730px) {
      padding-top: 200px;
      top: 24px;
      right: 24px;
      width: calc(100% - 24px);
      height: calc(100% - 12px);
    }
  }
`;

export const SectionTitle = styled.h1`
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

export const Title = styled.p`
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.p`
  /* max-width: 400px; */
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.secondaryBg};
`;
