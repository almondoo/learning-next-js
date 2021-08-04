import styled, { css } from 'styled-components';
import variable from '../../common/variable';

const Wrapper = styled.div<{ width: string }>`
  display: inline-block;
  width: ${({ width }) => width};
  height: calc((1em * 1.2) + 30px);
`;

const Field = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Label = styled.label<{ isInput: string | number; isFloat: boolean }>`
  position: absolute;
  z-index: 2;
  ${({ isInput, isFloat }) => {
    if (isInput || isFloat) {
      return css`
        top: 0;
        font-size: 12px;
        z-index: 4;
      `;
    } else {
      return css`
        top: 50%;
      `;
    }
  }}
  transform: translateY(-50%);
  left: 10px;
  max-width: 100%;
  padding: 0 3px;
  transition: all 0.3s;
  color: ${variable.color.darkGray};
  background-color: #fff;
  border-radius: 5px;
  line-height: 1;
`;

const Input = styled.input<{ errors: string[] }>`
  position: absolute;
  z-index: 3;
  padding: 15px 10px;
  width: 100%;
  height: 100%;
  border: ${({ errors }) =>
    errors.length ? `1px solid ${variable.color.red}` : `1px solid ${variable.color.darkGray}`};
  border-radius: 5px;
  &:hover {
    border: 1px solid #000;
  }
  &:focus {
    border: 2px solid ${variable.color.blue};

    ~ ${Label} {
      font-size: 12px;
      top: 0;
      z-index: 4;
      color: ${variable.color.blue};
    }
  }
`;

const EyeIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  display: block;
  width: 20px;
  height: 20px;
  background-image: url('/images/svg/eye.svg');
  background-repeat: no-repeat;
  z-index: 4;
  cursor: pointer;
`;

const Required = styled.span`
  margin-left: 5px;
  color: red;
`;

const Error = styled.p`
  margin: 5px 0;
  font-size: 12px;
  padding: 0 10px;
  color: ${variable.color.red};
`;

const exportDefault = {
  Wrapper,
  Field,
  Input,
  Label,
  EyeIcon,
  Required,
  Error,
};

export default exportDefault;
