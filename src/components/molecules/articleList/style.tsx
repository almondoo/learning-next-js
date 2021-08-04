import styled from 'styled-components';
import { maxDevice } from '../../common/mediaQuery';

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

const Item = styled.li`
  max-width: 400px;
  margin-bottom: 50px;
  @media ${maxDevice.mobile} {
    width: 100%;
  }
`;

const exportDefault = {
  List,
  Item,
};

export default exportDefault;
