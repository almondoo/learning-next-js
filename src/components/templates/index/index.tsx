import Style from './style';
import Head from 'next/head';
import Image from 'next/image';
import ArticleCardSlider from '../../molecules/articleCardSlider/index';
import ArtSquareSlider from '../../organisms/artSquareSlider/index';
import type { ProductList } from '../../../models/product';
import type { ArticleList } from '../../../models/article';
import { Artist } from '../../../models/artist';
import Link from '../../atoms/link';
import { routes } from '../../../utils/routes';

type Props = {
  articleItems: ArticleList[];
  authorSliderItems: {
    author: Artist;
    products: ProductList[];
  }[];
};

const Home = ({ articleItems, authorSliderItems, ...props }: Props): JSX.Element => {
  return (
    <Style.Wrapper {...props}>
      <Head>
        <title>FIRST ART | 初めての方でもアートを体験しよう</title>
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
        <Image
          src="/images/home/main.jpeg"
          alt=""
          layout="fill"
          objectFit="cover"
          loading="eager"
        />
        <Style.TopTitle>アートは体験だ</Style.TopTitle>
      </Style.Top>
      <Style.Main>
        <Style.Section>
          <Style.SectionTitle>アーティストのアート作品一覧</Style.SectionTitle>
          {authorSliderItems.map((v, i) => (
            <Style.SliderWrap key={i}>
              <ArtSquareSlider items={v.products} author={v.author} />
              <Style.ListLink>
                <Link href={routes.product}>{v.author.name}の作品一覧へ</Link>
              </Style.ListLink>
            </Style.SliderWrap>
          ))}
        </Style.Section>
        <Style.Section>
          <Style.SectionTitle>記事一覧</Style.SectionTitle>
          <Style.SliderWrap>
            <ArticleCardSlider items={articleItems} />
            <Style.ListLink>
              <Link href={routes.article}>記事一覧へ</Link>
            </Style.ListLink>
          </Style.SliderWrap>
        </Style.Section>
      </Style.Main>
    </Style.Wrapper>
  );
};

export default Home;
