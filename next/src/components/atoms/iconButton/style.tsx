import styled from 'styled-components';

const Icon = styled.div`
  padding: 5px;
  transition: all 0.2s;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const exportDefault = {
  Icon,
};

export default exportDefault;
