import styled from 'styled-components';
import MaterialImage from 'next/image';

const Wrapper = styled.div<{ size: number }>`
  position: relative;
  min-width: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;
  max-width: ${({ size }) => size}px;
  max-height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const Image = styled(MaterialImage)`
  border-radius: 50%;
`;

const exportDefault = {
  Wrapper,
  Image,
};

export default exportDefault;
