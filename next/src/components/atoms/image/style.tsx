import styled from 'styled-components';

const Wrapper = styled.div<{ height?: string }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height};
`;

const exportDefault = {
  Wrapper,
};

export default exportDefault;
