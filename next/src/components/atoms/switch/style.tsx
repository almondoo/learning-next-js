import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
`;

const Label = styled.label`
  display: block;
  position: relative;
  width: 2em;
  height: 1em;
  border-radius: 1em;
  background-color: grey;
  transition: all 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 0.05em;
    left: 0.05em;
    width: 0.9em;
    height: 0.9em;
    border-radius: 0.9em;
    background-color: #fff;
    transition: all 0.3s;
  }
`;

const Switch = styled.input`
  display: none;
  &:checked + ${Label} {
    background-color: #2dcb45;
  }
  &:checked + ${Label}::before {
    left: calc(100% - 0.95em);
  }
`;

const Text = styled.p`
  margin-left: 20px;
  font-size: 1rem;
`;

const exportDefault = {
  Wrapper,
  Switch,
  Label,
  Text,
};

export default exportDefault;
