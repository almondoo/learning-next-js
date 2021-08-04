import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Wrapper = styled.div<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(225deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  z-index: 10000;
  transition: all 1s;
`;

const Text = styled.p`
  position: relative;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-family: 'Courgette';
  font-size: 5rem;
  font-style: italic;
`;

const exportDefault = {
  Wrapper,
  Text,
};

export default exportDefault;
