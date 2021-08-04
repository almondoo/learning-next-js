import styled from 'styled-components';

const Icon = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #000;
  box-sizing: content-box;
  overflow: hidden;
  margin-bottom: 10px;
  transition: all 0.3s;
  will-change: transform;
`;

const Wrapper = styled.div`
  text-align: center;

  &:hover {
    ${Icon} {
      transform: scale(1.05, 1.05);
    }
  }
`;

const Name = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;
`;

const Position = styled.p`
  font-size: 14px;
`;

const exportDefault = {
  Wrapper,
  Icon,
  Name,
  Position,
};

export default exportDefault;
