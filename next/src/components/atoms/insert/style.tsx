import styled, { css } from 'styled-components';

const Overflow = styled.div`
  overflow: hidden;
`;

const Wrapper = styled.div<{ state: string; vector: string }>`
  transition: transform 1.5s, opacity 1s;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  ${({ state, vector }) => {
    switch (vector) {
      case 'top':
        return css`
          transform: translateY(${state === 'entered' ? 0 : 50}px);
        `;

      case 'left':
        return css`
          transform: translateX(${state === 'entered' ? 0 : -50}px);
        `;

      case 'right':
        return css`
          transform: translateX(${state === 'entered' ? 0 : 50}px);
        `;

      case 'bottom':
        return css`
          transform: translateY(${state === 'entered' ? 0 : -50}px);
        `;
    }
  }}
`;

const exportDefault = {
  Overflow,
  Wrapper,
};

export default exportDefault;
