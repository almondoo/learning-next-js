import styled, { keyframes } from 'styled-components';
import { maxDevice } from '../components/common/mediaQuery';

const Wrapper = styled.div`
  /* margin-top: 30px; */
`;

const Top = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const delay = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const TopTitle = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-size: 40px;
  animation: ${delay} 3s;
  z-index: 3;
  text-align: center;
`;

const Section = styled.section`
  width: 100%;
  padding: 50px 0;
`;

const Inner = styled.div`
  width: 800px;
  margin: 0 auto;

  @media ${maxDevice.mobile} {
    width: 100%;
    padding: 0 15px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 24px;
  }

  .number {
    margin-right: 20px;
    font-size: 33px;
    font-family: cursive;
  }

  .line {
    width: 160px;
    max-width: calc(100% - 24px);
    height: 1px;
    margin-left: 24px;
    background-color: #333;
    @media ${maxDevice.mobile} {
      width: 80px;
    }
  }
`;

const Description = styled.p`
  margin-top: 30px;
  line-height: 1.5;
`;

const ImageWrap = styled.div`
  margin-top: 100px;
`;

const ArrcodionList = styled.ul`
  margin-top: 30px;
`;

const ArrcodionListItem = styled.li`
  margin: 20px 0;
`;

export default exportDefault;

const exportDefault = {
  Wrapper,
  Top,
  TopTitle,
  Section,
  Inner,
  TitleWrap,
  Description,
  ImageWrap,
  ArrcodionList,
  ArrcodionListItem,
};
