import styled from 'styled-components';
import variable from '../../common/variable';

const Tabs = styled.div`
  display: flex;
`;

const Tab = styled.div<{ isSelect: boolean }>`
  width: 300px;
  padding: 10px 0;
  text-align: center;
  font-size: 20px;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${variable.color.lightGray};
  }
`;

const BorderSlider = styled.span<{ left: string }>`
  display: block;
  width: 300px;
  height: 3px;
  margin-left: ${({ left }) => left};
  border-radius: 5px;
  background-color: red;
  transition: all 0.5s ease;
`;

const exportDefault = {
  Tabs,
  Tab,
  BorderSlider,
};

export default exportDefault;
