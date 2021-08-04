import styled from 'styled-components';
import { maxDevice } from '../../common/mediaQuery';
import MaterialTitle from '../../atoms/title/index';

const Title = styled(MaterialTitle)`
  text-align: center;
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
`;

const ItemList = styled.li`
  width: 25%;

  @media ${maxDevice.pc} {
    width: 33.33333%;
  }

  @media ${maxDevice.tablet} {
    width: 50%;
  }

  @media ${maxDevice.mobile} {
    width: 100%;
    margin-bottom: 30px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const exportDefault = {
  Title,
  List,
  ItemList,
};

export default exportDefault;
