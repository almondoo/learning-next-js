import styled, { css } from 'styled-components';
import variable from '../../utils/variable';

const Wrapper = styled.div<{ width: string }>`
  display: inline-block;
  width: ${({ width }) => width};
  background-color: #fff;
`;

const Field = styled.div<{ height: string }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height};
`;

const Input = styled.textarea<{ height: string; errors: [] }>`
  position: absolute;
  z-index: 3;
  resize: none;
  padding: 15px 10px;
  width: 100%;
  height: ${({ height }) => height};
  border: ${({ errors }) =>
    errors.length ? `1px solid ${variable.color.red}` : `1px solid ${variable.color.darkGray}`};
  border-radius: 5px;
  &:hover {
    border: 1px solid #000;
  }
  &:focus {
    border: 2px solid ${variable.color.blue};
    ~ label {
      font-size: 12px;
      top: 0;
      z-index: 4;
      color: ${variable.color.blue};
    }
  }
`;

const Label = styled.label<{ isInput: string }>`
  position: absolute;
  z-index: 2;
  ${({ isInput }) => {
    if (isInput) {
      return css`
        top: 0;
        font-size: 12px;
        z-index: 4;
      `;
    } else {
      return css`
        top: 20px;
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
  Required,
  Error,
};

export default exportDefault;
