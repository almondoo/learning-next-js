import styled from 'styled-components';
import { maxDevice } from '../../../common/mediaQuery';
import variable from '../../../common/variable';
import MaterialCard from '../../../atoms/card/index';
import MaterialButton from '../../../atoms/button/index';

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  padding: 20vh 30px 0;
  @media ${maxDevice.mobile} {
    padding: 20vh 15px 0;
  }
`;

const Card = styled(MaterialCard)`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  @media ${maxDevice.mobile} {
    padding: 30px 15px;
  }
`;

const Button = styled(MaterialButton)`
  margin: 20px auto 0;
  color: #fff;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Link = styled.a`
  color: ${variable.color.darkGray};
  cursor: pointer;
`;

const exportDefault = {
  Wrapper,
  Card,
  Button,
  Links,
  Link,
};

export default exportDefault;
