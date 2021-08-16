import Style from './style';
import Link from '../../uiParts/link/index';

const items = [
  {
    url: '/mypage',
    title: 'マイページ',
  },
  {
    url: '/mypage/setting/email',
    title: 'メールアドレス変更',
  },
  {
    url: '/mypage/setting/password',
    title: 'パスワード変更',
  },
  {
    url: '/contact',
    title: '問い合わせ',
  },
  {
    url: '/terms',
    title: '利用規約',
  },
  {
    url: '/privacy-policy',
    title: 'プライバシーポリシー',
  },
  {
    url: '/logout',
    title: 'ログアウト',
  },
];

type Props = {
  className?: string;
};

const settingSideMenu = (props: Props): JSX.Element => {
  return (
    <Style.List {...props}>
      {items.map((v, i) => (
        <Style.ListItem key={i}>
          <Link href={v.url}>{v.title}</Link>
        </Style.ListItem>
      ))}
    </Style.List>
  );
};

export default settingSideMenu;
