import styled from 'styled-components';
import MaterialCard from '../card/index';
import MaterialImage from '../image/index';

const Card = styled(MaterialCard)`
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05, 1.05);
  }
`;

const Image = styled(MaterialImage)`
  height: 250px;
`;

const Wrapper = styled.div`
  padding: 15px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Name = styled.p`
  margin-left: 10px;
`;

const Title = styled.p`
  margin-bottom: 5px;
`;

const Category = styled.p`
  font-size: 12px;
`;

const exportDefault = {
  Card,
  Image,
  Wrapper,
  AuthorInfo,
  Name,
  Title,
  Category,
};

export default exportDefault;
