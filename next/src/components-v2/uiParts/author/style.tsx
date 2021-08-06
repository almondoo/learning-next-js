import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 15px;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorInfo = styled.div`
  margin-left: 15px;
`;

const AuthorName = styled.p``;

const Position = styled.p`
  margin-bottom: 5px;
`;

const exportDefault = {
  Wrapper,
  Block,
  AuthorInfo,
  AuthorName,
  Position,
};

export default exportDefault;
