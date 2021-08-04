import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  height: 44px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 24px;
`;

const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  border-right: 1px solid #000;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Category = styled.select`
  width: 100%;
  margin-left: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

const Triangle = styled.label`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 16px 10px 0 10px;
  border-color: #000 transparent transparent transparent;
`;

const Input = styled.input`
  flex: 1;
  padding: 0 10px;
`;

const exportDefault = {
  Wrapper,
  CategoryWrap,
  Category,
  Triangle,
  Input,
};

export default exportDefault;
