import Style from './style';
import Head from 'next/head';
import Image from 'next/image';
import type { ProductList } from '../../../models/product';
import type { ArticleList } from '../../../models/article';
import type { Artist } from '../../../models/artist';
import Author from '../../identities/index/author/index';
import Slider from '../../uiParts/slider/index';
import ListItem from '../../identities/index/listItem/index';
import ArticleCard from '../../uiParts/articleCard/index';
import Link from '../../uiParts/link/index';
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
              <Author
                category={v.author.category}
                name={v.author.name}
                uniqueName={v.author.uniqueName}
                icon={v.author.icon}
              />
              <Slider>
                {v.products.map((p, index) => (
                  <Style.ListItemWrap key={index}>
                    <Link href={routes.productDetail + String(p.id)}>
                      <ListItem {...p} />
                    </Link>
                  </Style.ListItemWrap>
                ))}
              </Slider>
              <Style.ListLink>
                <Link href={routes.product}>{v.author.name}の作品一覧へ</Link>
              </Style.ListLink>
            </Style.SliderWrap>
          ))}
        </Style.Section>
        <Style.Section>
          <Style.SectionTitle>記事一覧</Style.SectionTitle>
          <Style.SliderWrap>
            <Slider {...props}>
              {articleItems.map((v, i) => (
                <Style.ListItemWrap key={i}>
                  <Link href={routes.articleDetail + String(v.id)}>
                    <ArticleCard {...v} />
                  </Link>
                </Style.ListItemWrap>
              ))}
            </Slider>
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
