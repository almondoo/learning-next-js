import styled from 'styled-components';
import variable from '../../utils/variable';

const ErrorList = styled.ul`
  margin-top: 5px;
`;

const ErrorListItem = styled.li`
  display: inline;
  margin-top: 5px;
  padding: 0 10px;
  font-size: 12px;
  color: ${variable.color.red};
  &:first-of-type {
    margin: 0;
  }
`;

const exportDefault = {
  ErrorList,
  ErrorListItem,
};

export default exportDefault;
