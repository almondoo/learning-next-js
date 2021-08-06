import { GetServerSideProps } from 'next';
import Template from '../../components-v2/templates/articles/index/index';
import { getArticleApi, useArticleList } from '../../api/swr/article';
import type { ArticleListApi } from '../../api/swr/article';
import GetError from '../../components-v2/originals/getError/index';

type Props = {
  initialData: ArticleListApi;
};

const Article = ({ initialData }: Props): JSX.Element => {
  const { articles, error } = useArticleList(initialData);
  if (error) return <GetError isError={error ? true : false} />;
  if (!articles) return <div>...Loading</div>;

  return <Template articles={articles} />;
};

export default Article;

export const getServerSideProps: GetServerSideProps = async () => {
  const initialData = await getArticleApi()
    .then((res) => res)
    .catch(() => null);

  return {
    props: {
      initialData,
    },
  };
};
