import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const CropWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;

const exportDefault = {
  Wrapper,
  CropWrap,
  ButtonWrap,
};

export default exportDefault;
