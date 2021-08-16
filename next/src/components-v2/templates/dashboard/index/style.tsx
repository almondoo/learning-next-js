import styled from 'styled-components';
import { maxDevice } from '../../../utils/mediaQuery';
import MaterialCard from '../../../uiParts/card/index';

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 50px;
`;

const PriceWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const PriceCard = styled(MaterialCard)`
  flex: 1;
  margin: 0 20px;
  padding: 30px 50px;
  border-radius: 10px;
  @media ${maxDevice.mobile} {
    &:first-of-type {
      margin-bottom: 20px;
    }
  }
`;

const Price = styled.p`
  margin-top: 10px;
  font-size: 30px;
`;

const AllPrice = styled.p`
  margin-top: 10px;
  font-size: 30px;
`;

const SecondTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 23px;
`;

const exportDefault = {
  Wrapper,
  Title,
  SecondTitle,
  PriceCard,
  PriceWrap,
  Price,
  AllPrice,
};

export default exportDefault;
