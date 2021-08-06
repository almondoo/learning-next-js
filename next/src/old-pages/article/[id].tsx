import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getArticleDetailApi, useArticleDetail } from '../../api/swr/article';
import type { ArticleDetailApi } from '../../api/swr/article';
import Template from '../../components/templates/article/detail/index';

type Props = {
  id: number;
  initialData: ArticleDetailApi;
};

const ArticleDetail = ({ id, initialData }: Props): JSX.Element => {
  const { article, error } = useArticleDetail(id, initialData);

  if (error) return <div>Errorが発生しました。</div>;
  if (!article) return <div>...Loading</div>;

  return <Template article={article} />;
};

export default ArticleDetail;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx.query;
  const id = Number(query.id);
  const initialData = await getArticleDetailApi(id)
    .then((res) => res)
    .catch(() => null);

  return {
    props: {
      id,
      initialData,
    },
  };
};
