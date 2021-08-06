import styled from 'styled-components';
import MaterialImage from '../../../uiParts/image/index';
import MaterialAuthor from '../../../uiParts/author/index';
import { maxDevice } from '../../../utils/mediaQuery';

const Wrapper = styled.div`
  max-width: 800px;
  padding: 60px 0;
  margin: 0 auto;

  @media ${maxDevice.pc} {
    padding: 60px 20px;
  }
`;

const ImageWrap = styled.div`
  overflow: hidden;
  margin-bottom: 50px;
`;

const Image = styled(MaterialImage)`
  height: 500px;
  @media ${maxDevice.mobile} {
    height: 300px;
  }
`;

const Contents = styled.div``;

const DescriptionLabel = styled.p`
  margin-bottom: 5px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 1.8rem;
`;

const Price = styled.p`
  margin-bottom: 10px;
`;

const Description = styled.p``;

const Size = styled.p`
  margin-bottom: 10px;
`;

const Category = styled.p`
  margin-bottom: 10px;
`;

const Author = styled(MaterialAuthor)`
  margin-bottom: 10px;
`;

const BackBtnGroup = styled.div`
  margin-top: 30px;
  text-align: right;
  color: grey;
`;

const exportDefault = {
  Wrapper,
  ImageWrap,
  Image,
  Contents,
  Author,
  Title,
  Price,
  DescriptionLabel,
  Description,
  Size,
  Category,
  BackBtnGroup,
};

export default exportDefault;
