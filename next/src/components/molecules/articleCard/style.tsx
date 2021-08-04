import styled from 'styled-components';
import MaterialImage from 'next/image';

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 8px;
  transition: all 0.3s;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    padding-top: 75%;
  }
`;

const Image = styled(MaterialImage)`
  transition: all 0.3s;
`;

const Wrapper = styled.div`
  width: 100%;

  &:hover {
    ${ImageWrap} {
      opacity: 0.8;
    }

    ${Image} {
      transform: scale(1.05, 1.05);
    }
  }
`;

const Date = styled.p`
  font-size: 11px;
  margin-bottom: 5px;
`;

const Title = styled.p`
  font-size: 16px;
`;

const exportDefault = {
  Wrapper,
  ImageWrap,
  Image,
  Date,
  Title,
};

export default exportDefault;
