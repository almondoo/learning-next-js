import { useState, useEffect, ReactNode } from 'react';
import Style from './style';
import Link from '../../uiParts/link/index';
import { useRouter } from 'next/router';

const sideMenuList = [
  {
    url: '/dashboard',
    title: 'ダッシュボード',
  },
  {
    url: '/dashboard/product',
    title: '作品一覧',
  },
];

type Props = {
  children: ReactNode;
};

const DashBoard = ({ children, ...props }: Props) => {
  const [index, setIndex] = useState<number>();
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;
    let number;
    for (let i = 0; i < sideMenuList.length; ++i) {
      const value = sideMenuList[i];
      if (value.url === path) {
        number = i;
      }
    }
    setIndex(number);
  }, [router.asPath]);

  return (
    <Style.Wrapper {...props}>
      <Style.SideMenu>
        <Style.List>
          {sideMenuList.map((v, i) => {
            const isSelect = i == index;
            return (
              <Style.ListItem key={i} isSelect={isSelect}>
                <Link href={v.url} isUnderline={false}>
                  <Style.LiBlock>{v.title}</Style.LiBlock>
                </Link>
              </Style.ListItem>
            );
          })}
        </Style.List>
      </Style.SideMenu>
      <Style.Main>{children}</Style.Main>
    </Style.Wrapper>
  );
};

export default DashBoard;
