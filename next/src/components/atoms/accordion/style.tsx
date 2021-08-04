import styled, { css } from "styled-components";
import Card from "../card/index";

const Wrapper = styled(Card)`
  max-width: 100%;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 0 auto;
  cursor: pointer;
`;

const Title = styled.p``;

const Icon = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 0 0 16px;
  color: #000;
  vertical-align: middle;
  text-decoration: none;
  font-size: 15px;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    content: "";
    vertical-align: middle;
  }

  &::before {
    bottom: 6px;
    width: 12px;
    height: 12px;
    border-top: 3px solid #000;
    border-right: 3px solid #000;
    transform: rotate(135deg);
  }
`;

const ContentWrap = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        display: block;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}
  border-top: 1px solid #333;
  transition: all 0.3s;
  overflow: hidden;
  margin: 0 20px;
`;

const Content = styled.p`
  padding: 20px 0;
`;

const exportDefault = {
  Wrapper,
  Bar,
  Title,
  Icon,
  ContentWrap,
  Content,
};

export default exportDefault;
