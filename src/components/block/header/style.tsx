import styled, { css } from 'styled-components';
import MaterialButton from '../../atoms/button/index';
import variable from '../../common/variable';
import { maxDevice, minDevice } from '../../common/mediaQuery';

const Wrapper = styled.header<{ state: string }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 30px;
  transition: all 0.8s;
  z-index: 10000;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 6px 1px rgb(0 0 0 / 14%),
    0px 1px 3px 1px rgb(0 0 0 / 12%);

  @media ${maxDevice.mobile} {
    justify-content: center;
    padding: 0 20px 0 50px;
  }

  ${({ state }) => {
    if (state === 'exiting' || state === 'exited') {
      return css`
        top: -80px;
      `;
    }
  }}
`;

const WrapLoginBtn = styled.div`
  flex: 1;
  text-align: right;
`;

const LoginBtn = styled(MaterialButton)``;

const Span = styled.span<{ open: boolean }>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: ${({ open }) => (open ? '#000' : variable.color.gray)};
  border-radius: 4px;
  display: inline-block;
  transition: all 0.5s;
  &:nth-of-type(1) {
    top: 0;
  }

  &:nth-of-type(2) {
    top: 8px;
  }

  &:nth-of-type(3) {
    bottom: 0;
  }
  z-index: 10001;
`;

const MenuBtn = styled.div<{ open: boolean }>`
  position: relative;
  right: 0;
  width: 30px;
  height: 20px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.5s;
  z-index: 10000;

  ${({ open }) => {
    if (open) {
      return css`
        @media ${minDevice.tablet} {
          transform: rotate(-360deg);
          ${Span}:nth-of-type(1),
          ${Span}:nth-of-type(3) {
            width: 15px;
          }
          ${Span}:nth-of-type(1) {
            transform: translate(17px, 4px) rotate(45deg);
          }
          ${Span}:nth-of-type(3) {
            transform: translate(17px, -4px) rotate(-45deg);
          }
          right: 520px;
        }
        @media ${maxDevice.mobile} {
          transform: rotate(-360deg);
          ${Span}:nth-of-type(1),
          ${Span}:nth-of-type(3) {
            width: 15px;
          }
          ${Span}:nth-of-type(1) {
            transform: translate(17px, 4px) rotate(45deg);
          }
          ${Span}:nth-of-type(3) {
            transform: translate(17px, -4px) rotate(-45deg);
          }
      `;
    }
  }}
`;

const Link = styled.a`
  flex: 1;
  @media ${maxDevice.mobile} {
    text-align: center;
  }
`;

const exportDefault = {
  Wrapper,
  WrapLoginBtn,
  LoginBtn,
  MenuBtn,
  Span,
  Link,
};

export default exportDefault;
