import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  position: relative;
  width: 206px;
  height: 130px;
  border: 3px solid #000;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05, 1.05);
  }
`;

const Media = styled(Image)`
  opacity: 0.5;
`;

const CategoryTitle = styled.p`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 20px;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

const exportDefault = {
  Wrapper,
  Media,
  CategoryTitle,
};

export default exportDefault;
