import styled, { css } from 'styled-components';

const Fixed = styled.div<{ isPageMotion: boolean }>`
  visibility: ${({ isPageMotion }) => (isPageMotion ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
`;

const MoveMotion = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MoveBoxLeft = styled.div<{ isPageMotion: boolean }>`
  position: absolute;
  ${({ isPageMotion }) => {
    if (isPageMotion) {
      return css`
        top: 0%;
        left: 0%;
      `;
    } else {
      return css`
        top: -100%;
        left: -100%;
      `;
    }
  }}
  width: 0;
  height: 0;
  border-top: 0 solid transparent;
  border-right: 0 solid transparent;
  border-bottom: 100vh solid transparent;
  border-left: 100vw solid #111;
  transition: all 1s ease-out 0s;
`;

const MoveBoxRight = styled.div<{ isPageMotion: boolean }>`
  position: absolute;
  ${({ isPageMotion }) => {
    if (isPageMotion) {
      return css`
        top: 0%;
        left: 0%;
      `;
    } else {
      return css`
        top: 100%;
        left: 100%;
      `;
    }
  }}
  width: 0;
  height: 0;
  border-top: 100vh solid transparent;
  border-right: 100vw solid #111;
  border-bottom: 0 solid transparent;
  border-left: 0 solid transparent;
  transition: all 1s ease-out 0s;
`;

const exportDefault = {
  Fixed,
  MoveMotion,
  MoveBoxLeft,
  MoveBoxRight,
};

export default exportDefault;
