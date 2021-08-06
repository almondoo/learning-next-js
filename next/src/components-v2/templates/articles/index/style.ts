import styled from 'styled-components';
import { minDevice, maxDevice } from '../../../utils/mediaQuery';

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 20px;
  @media ${minDevice.pc} {
    padding: 30px 0;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: calc((100% / 3) - 13.4px);
  margin-left: 20px;
  margin-bottom: 40px;
  &:last-of-type {
    margin-bottom: 0;
  }

  @media ${minDevice.tablet} {
    &:nth-of-type(3n + 1) {
      margin-left: 0;
    }
    &:nth-last-of-type(3) {
      margin-bottom: 0;
    }
    &:nth-last-of-type(2) {
      margin-bottom: 0;
    }
  }
  @media ${maxDevice.tablet} and ${minDevice.mobile} {
    width: calc((100% / 2) - 10px);
    &:nth-of-type(2n + 1) {
      margin-left: 0;
    }

    &:nth-last-of-type(2) {
      margin-bottom: 0;
    }
  }
  @media ${maxDevice.mobile} {
    width: 100%;
    margin-left: 0;
  }
`;

const exportDefault = {
  Wrapper,
  Title,
  List,
  ListItem,
};

export default exportDefault;
