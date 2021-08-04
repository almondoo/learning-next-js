import Style from './style';
import Link from 'next/link';
import { routes } from '../../../utils/routes';
import BreadCrumb from '../breadCrumb';

const Footer = () => {
  return (
    <>
      <BreadCrumb />
      <Style.Wrapper>
        <Style.Container>
          <Style.Logo>
            <Link href="/">FIRST ART</Link>
          </Style.Logo>
          <Style.Grid>
            <Style.GridItem>
              <Style.Title>FIRST ARTについて</Style.Title>
              <Style.List>
                <Style.ListItem>
                  <Link href={`${routes.about}`}>
                    <a>FIRST ARTとは?</a>
                  </Link>
                </Style.ListItem>
                <Style.ListItem>
                  <Link href={`${routes.terms}`}>
                    <a>利用規約</a>
                  </Link>
                </Style.ListItem>
                <Style.ListItem>
                  <Link href={`${routes['privacy-policy']}`}>
                    <a>プライバシーポリシー</a>
                  </Link>
                </Style.ListItem>
                <Style.ListItem>
                  <Link href={`${routes.tokutei}`}>
                    <a>特定商取引法</a>
                  </Link>
                </Style.ListItem>
              </Style.List>
            </Style.GridItem>
            <Style.GridItem>
              <Style.Title>お問い合わせ</Style.Title>
              <Style.List>
                <Style.ListItem>
                  <Link href={`${routes.about}`}>
                    <a>よくある質問</a>
                  </Link>
                </Style.ListItem>
                <Style.ListItem>
                  <Link href={`${routes.contact}`}>
                    <a>お問い合わせ先</a>
                  </Link>
                </Style.ListItem>
                <Style.ListItem>
                  <Link href={`${routes.unsubscribe}`}>
                    <a>退会手順</a>
                  </Link>
                </Style.ListItem>
              </Style.List>
            </Style.GridItem>
          </Style.Grid>
        </Style.Container>
      </Style.Wrapper>
    </>
  );
};

export default Footer;
