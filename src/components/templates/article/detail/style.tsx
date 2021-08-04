import styled from 'styled-components';
import { maxDevice } from '../../../common/mediaQuery';
import MaterialImage from '../../../atoms/image/index';

const Wrapper = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 0;

  @media ${maxDevice.pc} {
    padding: 60px 20px;
  }
`;

const Date = styled.p`
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 1.8rem;
`;

const Thumanail = styled(MaterialImage)`
  height: 400px;
  margin-bottom: 30px;
  @media ${maxDevice.mobile} {
    height: 200px;
  }
`;

const Main = styled.div``;

const exportDefault = {
  Wrapper,
  Date,
  Title,
  Thumanail,
  Main,
};

export default exportDefault;
