import styled from 'styled-components';

const Wrapper = styled.div``;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 50px;
`;

const List = styled.ul`
  margin-bottom: 100px;
`;

const ListItem = styled.li`
  margin-bottom: 40px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Field = styled.div`
  display: flex;
  align-items: center;
`;

const FieldName = styled.p`
  margin-right: 20px;
`;

const SaveButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const exportDefault = {
  Wrapper,
  Title,
  List,
  ListItem,
  Field,
  FieldName,
  SaveButtonGroup,
};

export default exportDefault;
