import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Template from '../../components/templates/product/detail/index';
import { getProductDetailApi, useProductDetail } from '../../api/swr/product';
import type { ProductDetailApi } from '../../api/swr/product';
import Head from 'next/head';
import { customTitle } from '../../utils/headOs';
import GetError from '../../components/block/getError/index';

type Props = {
  id: number;
  initialData?: ProductDetailApi;
};

const ProductDetail = ({ id, initialData }: Props): JSX.Element => {
  const { product, error } = useProductDetail(id, initialData);

  if (error) return <GetError message={error.message} isError={error ? true : false} />;
  if (!product) return <div>...Loading</div>;
  console.log(product);

  return (
    <>
      <Head>
        <title>{customTitle(product.title)}</title>
      </Head>
      <Template product={product} />
    </>
  );
};

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const id = Number(ctx.query.id);
  const initialData = await getProductDetailApi(id)
    .then((res) => res)
    .catch(() => null);

  return {
    props: {
      id,
      initialData,
    },
  };
};
