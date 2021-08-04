import styled from 'styled-components';

const Wrapper = styled.div<{ isDots: boolean }>`
  padding-bottom: ${({ isDots }) => (isDots ? '20px' : '')};
`;

const NextArrow = styled.div`
  display: block;
  right: 5px;
  z-index: 1;
  &::before {
    color: #000;
  }
`;

const PrevArrow = styled.div`
  display: block;
  left: 5px;
  z-index: 1;
  &::before {
    color: #000;
  }
`;

const exportDefault = {
  Wrapper,
  NextArrow,
  PrevArrow,
};

export default exportDefault;
