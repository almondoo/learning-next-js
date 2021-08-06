import styled from 'styled-components';
import MaterialImage from '../../../uiParts/image/index';

const Wrapper = styled.div``;

const Image = styled(MaterialImage)`
  transition: all 0.3s;
  height: 200px;
`;

const ImageWrap = styled.div`
  overflow: hidden;
  margin-bottom: 20px;

  &:hover {
    ${Image} {
      opacity: 0.8;
      transform: scale(1.05, 1.05);
    }
  }
`;

const Item = styled.li`
  margin-right: 30px;
  min-width: 200px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Description = styled.div`
  width: 100%;
`;

const Title = styled.p``;

const Price = styled.p`
  font-style: italic;
`;

const exportDefault = {
  Wrapper,
  Item,
  Image,
  ImageWrap,
  Description,
  Title,
  Price,
};

export default exportDefault;
