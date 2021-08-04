import styled from 'styled-components';

const Item = styled.li`
  margin-right: 30px;
  min-width: 200px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const exportDefault = {
  Item,
};

export default exportDefault;
