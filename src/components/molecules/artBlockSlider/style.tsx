import styled from 'styled-components';
import MaterialImage from '../../atoms/image/index';

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

const exportDefault = {
  Item,
  Image,
  ImageWrap,
};

export default exportDefault;
