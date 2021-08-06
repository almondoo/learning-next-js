import styled, { keyframes } from 'styled-components';
import { maxDevice } from '../../utils/mediaQuery';

const Wrapper = styled.div``;

const Top = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  @supports (-webkit-touch-callout: none) {
    @media ${maxDevice.mobile} {
      height: -webkit-fill-available;
    }
  }
`;

const delay = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 20px);
  }

  100% {
    opacity: 1;
    transform: translateY(-50%, 0);
  }
`;

const TopTitle = styled.div`
  position: absolute;
  top: calc(50% - 80px);
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-size: 40px;
  animation: ${delay} 3s;
  z-index: 3;
  text-align: center;
`;

const Main = styled.div`
  margin: 100px 0;
`;

const Section = styled.section`
  margin-bottom: 100px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h1`
  margin-bottom: 50px;
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

const SliderWrap = styled.div`
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ListItemWrap = styled.li`
  margin-right: 30px;
  max-width: 200px;
  min-width: 200px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const CategorysliderWrap = styled.div`
  max-width: 1100px;
  margin: 50px auto;
`;

const ProductBlockListWrap = styled.div`
  max-width: 1100px;
  margin: 50px auto;
`;

const ArticleList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 50px auto;
  padding: 0 15px;
`;

const ArticleListItem = styled.li`
  max-width: 400px;
  margin-bottom: 50px;
  @media ${maxDevice.mobile} {
    width: 100%;
  }
`;

const ListLink = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 0 50px;
  text-align: right;
`;

const exportDefault = {
  Wrapper,
  Top,
  TopTitle,
  SliderWrap,
  ListItemWrap,
  CategorysliderWrap,
  ProductBlockListWrap,
  ArticleList,
  ArticleListItem,
  Main,
  Section,
  SectionTitle,
  ListLink,
};

export default exportDefault;
