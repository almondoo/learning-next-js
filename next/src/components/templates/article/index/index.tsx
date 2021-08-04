import Style from './style';
import type { ArticleList } from '../../../../models/article';
import Link from '../../../atoms/link/index';
import ArtCard from '../../../molecules/articleCard/index';
import { routes } from '../../../../utils/routes';

type Props = {
  articles: ArticleList[];
};

const ArticleDetail = ({ articles }: Props): JSX.Element => {
  return (
    <Style.Wrapper>
      <Style.Title>記事一覧</Style.Title>
      <Style.List>
        {articles.map((v) => {
          return (
            <Style.ListItem key={v.id}>
              <Link href={routes.articleDetail + String(v.id)}>
                <ArtCard {...v} />
              </Link>
            </Style.ListItem>
          );
        })}
      </Style.List>
    </Style.Wrapper>
  );
};

export default ArticleDetail;
