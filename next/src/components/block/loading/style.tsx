import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: #333;
`;

const skRotateplane = keyframes`
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  `;

const Load = styled.div`
  width: 40px;
  height: 40px;
  background-color: #333;

  margin: 100px auto;
  animation: ${skRotateplane} 1.2s infinite ease-in-out;
  position: absolute;
  z-index: 100000;
`;

const exportDefault = {
  Wrapper,
  Load,
};

export default exportDefault;
