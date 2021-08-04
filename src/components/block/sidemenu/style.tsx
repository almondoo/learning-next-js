import styled from 'styled-components';
import variable from '../../common/variable';
import { maxDevice } from '../../common/mediaQuery';

const OverLay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9990;
`;

const SideMenu = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-100%')};
  width: 500px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  transition: all 0.5s;
  overflow: scroll;
  z-index: 10000;
  @media ${maxDevice.mobile} {
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 10px 0;
`;

const Line = styled.div`
  margin: 0 20px;
  border: 1px solid #000;
`;

const List = styled.ul`
  width: 400px;
  height: 100%;
  padding-top: 150px;
  @media ${maxDevice.mobile} {
    width: 300px;
  }
`;

const ListItem = styled.li`
  padding: 10px 0 10px 60px;
  border-top: 2px solid ${variable.color.darkGray};
  &:last-of-type {
    border-bottom: 2px solid ${variable.color.darkGray};
  }
`;

const Button = styled.a`
  display: inline-block;
  cursor: pointer;
`;

const Icon = styled.img`
  display: inline-block;
  width: 30px;
  vertical-align: middle;
`;

const Text = styled.p`
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
`;

const exportDefault = {
  OverLay,
  SideMenu,
  Title,
  Line,
  List,
  ListItem,
  Button,
  Icon,
  Text,
};

export default exportDefault;
