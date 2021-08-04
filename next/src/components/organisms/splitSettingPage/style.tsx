import styled from 'styled-components';
import { maxDevice } from '../../common/mediaQuery';
import MaterialSideMenu from '../sidemenu/index';

const SideMenu = styled(MaterialSideMenu)`
  flex: 0.3;
  @media ${maxDevice.tablet} {
    flex: 0 0 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 840px;
  margin: 0 auto;
  padding: 50px;
  @media ${maxDevice.tablet} {
    flex-wrap: wrap-reverse;
    padding: 50px 15px;
  }
`;

const Main = styled.div`
  flex: 0.7;
  @media ${maxDevice.tablet} {
    flex: 0 0 100%;
    margin-bottom: 50px;
  }
`;

const exportDefault = {
  SideMenu,
  Wrapper,
  Main,
};

export default exportDefault;
