import { forwardRef } from 'react';
import Style from './style';
import Link from 'next/link';

type ForwardProps = {
  children: React.ReactNode;
  href?: string;
  onClick: React.MouseEventHandler;
};

const Wrap = forwardRef<HTMLAnchorElement, ForwardProps>(function WrapForwardRef(
  { children, onClick, href },
  ref,
) {
  return (
    <Style.Button href={href} onClick={onClick} ref={ref}>
      {children}
    </Style.Button>
  );
});

type Props = {
  open: boolean;
  handleSetOpen: () => void;
};

const SideMenu = ({ open, handleSetOpen, ...props }: Props): JSX.Element => {
  const links = [
    {
      text: 'ホーム',
      url: '/',
      icon: '/images/svg/envelope.svg',
    },
    {
      text: '作品一覧',
      url: '/product',
      icon: '/images/svg/envelope.svg',
    },
    {
      text: '記事一覧',
      url: '/article',
      icon: '/images/svg/envelope.svg',
    },
    {
      text: 'マイページ',
      url: '/mypage',
      icon: '/images/svg/tag.svg',
    },
    {
      text: 'ダッシュボード',
      url: '/dashboard',
      icon: '/images/svg/tag.svg',
    },
  ];

  return (
    <Style.OverLay open={open} {...props}>
      <Style.SideMenu open={open}>
        <Style.List>
          {links.map((link) => (
            <Style.ListItem key={link.text}>
              <Link href={link.url} passHref>
                <Wrap onClick={handleSetOpen}>
                  <Style.Icon src={link.icon} />
                  <Style.Text>{link.text}</Style.Text>
                </Wrap>
              </Link>
            </Style.ListItem>
          ))}
        </Style.List>
      </Style.SideMenu>
    </Style.OverLay>
  );
};

export default SideMenu;
