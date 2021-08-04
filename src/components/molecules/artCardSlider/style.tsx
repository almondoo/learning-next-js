import styled, { css } from 'styled-components';
import MaterialSliderTitle from '../../atoms/title/index';

const Wrapper = styled.div``;

const SliderTitle = styled(MaterialSliderTitle)`
  text-align: center;
  margin-bottom: 20px;
`;

const SliderWrapper = styled.div`
  padding: 15px 0 15px 10px;
`;

const Slider = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ItemList = styled.li`
  position: relative;
  width: 300px;
  min-width: 300px;
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

const Modal = styled.div<{ isHover: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;

  ${({ isHover }) => {
    if (isHover) {
      return css`
        opacity: 1;
      `;
    }
  }};
`;

const exportDefault = {
  Wrapper,
  SliderTitle,
  SliderWrapper,
  Slider,
  ItemList,
  Modal,
};

export default exportDefault;
