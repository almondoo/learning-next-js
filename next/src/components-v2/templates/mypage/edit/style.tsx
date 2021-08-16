import styled from 'styled-components';

const Main = styled.div``;

const List = styled.ul`
  margin-bottom: 100px;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ProfileImage = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const ProfileImageChagneBtn = styled.a`
  position: absolute;
  display: block;
  width: 28px;
  height: 28px;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 50%;
  background-image: url('/images/svg/plus-circle.svg');
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #fff;
  cursor: pointer;
`;

const SaveButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const exportDefault = {
  Main,
  List,
  ListItem,
  ProfileImage,
  ProfileImageChagneBtn,
  SaveButton,
};

export default exportDefault;
