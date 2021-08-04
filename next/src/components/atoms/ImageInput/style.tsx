import styled from 'styled-components';
import SortableContainer from '../sortable/index';

const Wrapper = styled.div``;

const Input = styled.input``;

const List = styled(SortableContainer)`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  height: 200px;
  margin-right: 40px;
  margin-bottom: 40px;
`;

const Image = styled.img`
  height: 100%;
`;

const exportDefault = {
  Wrapper,
  Input,
  List,
  Item,
  Image,
};

export default exportDefault;
