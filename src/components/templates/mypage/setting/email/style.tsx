import styled from 'styled-components';

const Main = styled.div``;

const List = styled.ul`
  margin-bottom: 100px;
`;

const ListItem = styled.li`
  margin-bottom: 50px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SaveButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const exportDefault = {
  Main,
  List,
  ListItem,
  SaveButton,
};

export default exportDefault;
