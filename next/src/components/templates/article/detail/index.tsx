import Style from './style';
import { ArticleDetail as TArticleDetail } from '../../../../models/article';

type Props = {
  article: TArticleDetail;
};

const ArticleDetail = ({ article }: Props): JSX.Element => {
  return (
    <Style.Wrapper>
      <Style.Date>{article.createdAt}</Style.Date>
      <Style.Title>{article.title}</Style.Title>
      <Style.Thumanail src={article.thumbnail} alt={article.title} />
      <Style.Main dangerouslySetInnerHTML={{ __html: article.text }} />
    </Style.Wrapper>
  );
};

export default ArticleDetail;
