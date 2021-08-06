import Style from './style';
import Head from 'next/head';
// import { routes } from '../../utils/routes';
import Image from 'next/image';
import Insert from '../../uiParts/insert/index';
import Accordion from '../../uiParts/accordion/index';

const accordions = [
  {
    title: '購入方法',
    text: 'ユーザーログインをして購入したい商品をカートに追加してカートからご購入できます。',
  },
  {
    title: 'お支払い方法',
    text: 'クレジットカードでのお支払いとなります。',
  },
];

const About = () => {
  return (
    <Style.Wrapper>
      <Head>
        <title>FIRST ARTについて | 初めての方でもアートを体験しよう</title>
        <meta
          property="description"
          content="FIRST ARTは初めての方でアートを体験できるWebサイトです。誰でもアーティストになりオンラインで販売できます。作品は絵画以外にも取り扱っております。"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="FIRST ARTは初めての方でアートを体験できるWebサイトです。誰でもアーティストになりオンラインで販売できます。作品は絵画以外にも取り扱っております。"
        />
        <meta property="og:title" content="FIRST ART | 初めての方でもアートを体験しよう" />
        <meta property="og:url" content="https://first-art.com" />
        <meta property="og:image" content="https://first-art.com/image/top/programming.png" />
      </Head>
      <Style.Top>
        <Image src="/images/home/main.jpeg" alt="" layout="fill" objectFit="cover" />
        <Style.TopTitle>アートは体験だ</Style.TopTitle>
      </Style.Top>
      <Insert vector="right">
        <Style.Section>
          <Style.Inner>
            <Style.TitleWrap>
              <p className="number">01</p>
              <h1>FIRST ARTとは？</h1>
              <div className="line" />
            </Style.TitleWrap>
            <Style.Description>
              FIRST ARTとはアートが初めての方でもアート体験ができるWebサイトです。
              <br />
              アーティストや作品の閲覧、購入やレンタルも可能です。
            </Style.Description>
            <Style.ImageWrap>
              <Image src="/images/home/first.jpeg" alt="" width={1000} height={707} />
            </Style.ImageWrap>
          </Style.Inner>
        </Style.Section>
      </Insert>
      <Insert vector="left">
        <Style.Section>
          <Style.Inner>
            <Style.TitleWrap>
              <p className="number">02</p>
              <h1>なぜやってるの？？</h1>
              <div className="line" />
            </Style.TitleWrap>
            <Style.Description>
              FIRST ARTとはアートが初めての方でもアート体験ができるWebサイトです。
              <br />
              アーティストや作品の閲覧、購入やレンタルも可能です。
            </Style.Description>
            <Style.ImageWrap>
              <Image src="/images/home/second.jpeg" alt="" width={1000} height={707} />
            </Style.ImageWrap>
          </Style.Inner>
        </Style.Section>
      </Insert>
      <Insert vector="right">
        <Style.Section>
          <Style.Inner>
            <Style.TitleWrap>
              <p className="number">03</p>
              <h1>なぜやってるの？？</h1>
              <div className="line" />
            </Style.TitleWrap>
            <Style.Description>
              FIRST ARTとはアートが初めての方でもアート体験ができるWebサイトです。
              <br />
              アーティストや作品の閲覧、購入やレンタルも可能です。
            </Style.Description>
            <Style.ImageWrap>
              <Image src="/images/home/second.jpeg" alt="" width={1000} height={707} />
            </Style.ImageWrap>
          </Style.Inner>
        </Style.Section>
      </Insert>
      <Insert vector="left">
        <Style.Section>
          <Style.Inner>
            <Style.TitleWrap>
              <p className="number">04</p>
              <h1>よくある質問</h1>
              <div className="line" />
            </Style.TitleWrap>
            <Style.Description>
              FIRST ARTとはアートが初めての方でもアート体験ができるWebサイトです。
              <br />
              アーティストや作品の閲覧、購入やレンタルも可能です。
            </Style.Description>
            <Style.ArrcodionList>
              {accordions.map((v) => (
                <Style.ArrcodionListItem key={v.title}>
                  <Accordion title={v.title}>{v.text}</Accordion>
                </Style.ArrcodionListItem>
              ))}
            </Style.ArrcodionList>
          </Style.Inner>
        </Style.Section>
      </Insert>
    </Style.Wrapper>
  );
};

export default About;
