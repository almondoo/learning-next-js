import styled, { css } from 'styled-components';
import variable from '../../common/variable';

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  margin: 15px 0;
  background-color: #fff;
`;

const Field = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
`;

const Select = styled.select<{ errors: [] }>`
  position: absolute;
  z-index: 3;
  padding: 15px 10px;
  width: 100%;
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

const Option = styled.option``;

const Label = styled.label<{ isInput: boolean }>`
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
  Select,
  Option,
  Label,
  Required,
  Error,
};

export default exportDefault;
