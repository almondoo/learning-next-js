import styled from 'styled-components';
import variable from '../../../common/variable';
import { maxDevice } from '../../../common/mediaQuery';

const Author = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const AuthorBlock = styled.div`
  margin-left: 15px;
`;

const Name = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Link = styled.p`
  color: ${variable.color.linkColor};
  font-weight: bold;
  &:hover {
    text-decoration: underline ${variable.color.linkColor};
  }
`;

const FollowDataList = styled.ul`
  display: flex;
  margin-left: 30px;
  @media ${maxDevice.mobile} {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const FollowDataListItem = styled.li`
  margin-right: 20px;
  text-align: center;
  &:last-of-type {
    margin-right: 0;
  }
`;

const Number = styled.p`
  font-size: 14px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const exportDefault = {
  Author,
  AuthorBlock,
  Name,
  Link,
  FollowDataList,
  FollowDataListItem,
  Number,
  Text,
};

export default exportDefault;
