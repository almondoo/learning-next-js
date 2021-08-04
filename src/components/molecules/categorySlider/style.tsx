import styled from 'styled-components';

const SliderWrapper = styled.div`
  padding: 15px 0 15px 10px;
`;

const Slider = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ItemList = styled.li`
  margin-right: 50px;

  &:last-of-type {
    position: relative;
    margin-right: 0;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 100%;
      width: 10px;
      height: 100%;
    }
  }
`;

const exportDefault = {
  SliderWrapper,
  Slider,
  ItemList,
};

export default exportDefault;
