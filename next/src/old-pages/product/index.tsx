import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Template from '../../components/templates/product/index/index';
import { getProductListApi, useProductList } from '../../api/swr/product';
import type { ProductListApi } from '../../api/swr/product';
import Head from 'next/head';
import { customTitle } from '../../utils/headOs';
import GetError from '../../components/block/getError/index';

type Props = {
  initialData?: ProductListApi;
  query: {
    page: number;
  };
};

const Product = ({ initialData, query }: Props): JSX.Element => {
  const { products, error } = useProductList(query.page || 1, initialData);

  if (error) return <GetError message={error.message} isError={error ? true : false} />;
  if (!products) return <div>...Loading</div>;

  return (
    <>
      <Head>
        <title>{customTitle(`商品一覧ページ ${query.page || 1}ページ目`)}</title>
      </Head>
      <Template products={products} />
    </>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx.query;
  const page = Number(query.page);
  const initialData = await getProductListApi(page || 1)
    .then((res) => res)
    .catch(() => null);

  return {
    props: {
      initialData,
      query: {
        page,
      },
    },
  };
};
