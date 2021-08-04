import Style from './style';

const SplitSettingPage = ({ children, ...props }) => {
  return (
    <Style.Wrapper {...props}>
      <Style.SideMenu />
      <Style.Main>{children}</Style.Main>
    </Style.Wrapper>
  );
};

export default SplitSettingPage;
