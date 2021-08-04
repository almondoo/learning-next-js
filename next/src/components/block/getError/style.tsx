import styled, { css, keyframes } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  text-align: center;
`;

const Message = styled.p`
  font-size: 30px;
`;

const Retry = styled.div<{ isError: boolean }>`
  margin-top: 30px;
  ${({ isError }) => {
    if (isError) {
      return css`
        display: none;
      `;
    }
  }}
`;

const Spinner = styled.div``;

const skBouncedelay = keyframes`
 0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

const Bounce = styled.div`
  width: 18px;
  height: 18px;
  background-color: grey;
  margin-left: 5px;

  border-radius: 100%;
  display: inline-block;
  animation: ${skBouncedelay} 1.4s infinite ease-in-out both;

  &:first-of-type {
    animation-delay: -0.32s;
    margin-left: 0;
  }

  &:nth-of-type(2) {
    animation-delay: -0.16s;
  }
`;

const RetryMes = styled.p`
  margin-top: 10px;
`;

const exportDefault = {
  Wrapper,
  Message,
  Retry,
  Spinner,
  Bounce,
  RetryMes,
};

export default exportDefault;
