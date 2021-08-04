import styled from 'styled-components';

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
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover {
    ${Link} {
      opacity: 1;
    }
  }
`;

const Detail = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
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
  Detail,
};

export default exportDefault;
