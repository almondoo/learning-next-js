import { ReactNode } from 'react';
import Style from './style';

type Props = {
  children: ReactNode;
};

const SplitSettingPage = ({ children, ...props }: Props) => {
  return (
    <Style.Wrapper {...props}>
      <Style.SideMenu />
      <Style.Main>{children}</Style.Main>
    </Style.Wrapper>
  );
};

export default SplitSettingPage;
