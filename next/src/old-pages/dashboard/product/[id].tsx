import { useEffect } from 'react';
import Template from '../../../components/templates/dashboard/product/detail/index';
import { useRouter } from 'next/router';
import type { ProductEdit } from '../../../models/product';

const product: ProductEdit = {
  id: 1,
  ProductCategoryId: 1,
  title: 'テストテストテストテストテストテストテストテスト',
  thumbnail: '/images/category/drawing.jpeg',
  price: 30000,
  description:
    '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明\n説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
  verticalLength: 500,
  horizontalLength: 500,
  isPublished: 1,
  productImages: [],
};

const ProductDetail = () => {
  const router = useRouter();

  useEffect(() => {
    // const id = router.query.id;
  }, [router]);

  return <Template product={product} />;
};

export default ProductDetail;
