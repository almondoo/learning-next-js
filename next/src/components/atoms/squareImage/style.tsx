import styled from 'styled-components';
import { maxDevice } from '../../common/mediaQuery';

const Link = styled.a`
  position: absolute;
  display: block;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 120;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s;

  @media ${maxDevice.mobile} {
    opacity: 1;
    background-color: transparent;
  }
`;

const Wrapper = styled.div`
  position: relative;
  &:hover {
    ${Link} {
      opacity: 1;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const Description = styled.div`
  display: none;
  text-align: center;

  @media ${maxDevice.mobile} {
    display: block;
    margin-top: 15px;
  }
`;

const Title = styled.p`
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-style: italic;
`;

const Detail = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${Title} {
    margin-bottom: 20px;
  }

  ${Price} {
    margin-bottom: 20px;
  }
`;

const Button = styled.div`
  font-size: 18px;
  position: relative;
  width: 160px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0 auto;
  font-size: 14px;
`;

// const Bdt = styled.div`
//   width: 0;
//   height: 1px;
//   top: 0;
//   left: 0;
// `;

// const Bdb = styled.div`
//   width: 0;
//   height: 1px;
//   bottom: 0;
//   right: 0;
// `;

// const Bdr = styled.div`
//   height: 0;
//   width: 1px;
//   right: 0;
//   top: 0;
// `;

// const Bdl = styled.div`
//   height: 0;
//   width: 1px;
//   left: 0;
//   bottom: 0;
// `;

const exportDefault = {
  Wrapper,
  Link,
  ImageWrap,
  Detail,
  Description,
  Title,
  Price,
  Button,
};

export default exportDefault;
