import styled from 'styled-components';
import variable from '../../common/variable';
import { maxDevice } from '../../common/mediaQuery';

const Wrapper = styled.footer`
  width: 100%;
  padding: 30px 30px 60px;
  background-color: ${variable.mainColor.darkAshPurple};
  color: ${variable.textColor.white};
  @media ${maxDevice.mobile} {
    padding: 30px 15px 45px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 40px;
  font-family: 'Pathway Gothic One';
  @media ${maxDevice.mobile} {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3%;
  column-gap: 3%;
  @media ${maxDevice.mobile} {
    display: block;
  }
`;

const GridItem = styled.div`
  width: 250px;
  @media ${maxDevice.mobile} {
    width: 100%;
    margin-bottom: 30px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Title = styled.p`
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

const List = styled.ul``;

const ListItem = styled.li`
  margin: 10px 0;
  &:hover {
    text-decoration-line: underline;
  }
`;

const exportDefault = {
  Wrapper,
  Container,
  Grid,
  Logo,
  GridItem,
  Title,
  List,
  ListItem,
};

export default exportDefault;
