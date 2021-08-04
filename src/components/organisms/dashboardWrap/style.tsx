import styled, { css } from 'styled-components';
import variable from '../../common/variable';
import { maxDevice } from '../../common/mediaQuery';

const Wrapper = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;

  @media ${maxDevice.pc} {
    flex-wrap: wrap;
  }
`;

const Title = styled.h1`
  font-size: 35px;
  text-align: center;
`;

const SideMenu = styled.nav`
  max-width: 230px;
  min-width: 200px;
  padding: 70px 20px;
  background-color: #f2f2f2;
  @media ${maxDevice.mobile} {
    flex: 0 0 100%;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    padding: 10px 20px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media ${maxDevice.mobile} {
    flex-wrap: nowrap;
    align-items: center;
    overflow-x: scroll;
    height: 100%;
  }
`;

const ListItem = styled.li<{ isSelect: boolean }>`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px 10px;
  font-size: 18px;
  transition: all 0.2s;
  border-radius: 5px;

  &:hover {
    background-color: ${variable.color.lightGray};
  }
  &:last-of-type {
    margin-bottom: 0;
  }

  ${({ isSelect }) => {
    if (isSelect) {
      return css`
        font-weight: bold;
        color: ${variable.color.serviceColor};
      `;
    }
  }}

  @media ${maxDevice.mobile} {
    display: inline-block;
    width: auto;
    height: 100%;
    margin-bottom: 0;
    margin-right: 10px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const LiBlock = styled.div`
  width: 100%;
`;

const Main = styled.div`
  flex: 1;
  padding: 30px 25px;
  width: 100%;
  overflow: hidden;
  @media ${maxDevice.mobile} {
    padding: 30px 15px;
  }
`;

const exportDefault = {
  Wrapper,
  Title,
  SideMenu,
  List,
  ListItem,
  LiBlock,
  Main,
};

export default exportDefault;
