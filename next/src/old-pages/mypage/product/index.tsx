import Template from '../../../components/templates/mypage/product/index/index';
import type { KariProduct } from '../../../models/product';

const products: KariProduct[] = [
  {
    id: 1,
    product_genre: {
      id: 1,
      name: '絵画',
    },
    title: 'テスト',
    thumbnail: '/images/category/drawing.jpeg',
    price: 30000,
    description: '説明',
    vertical_length: 500,
    horizontal_length: 500,
    is_published: true,
  },
  {
    id: 2,
    product_genre: {
      id: 1,
      name: '絵画',
    },
    title: 'テスト',
    thumbnail: '/images/category/drawing.jpeg',
    price: 30000,
    description: '説明',
    vertical_length: 500,
    horizontal_length: 500,
    is_published: true,
  },
  {
    id: 3,
    product_genre: {
      id: 1,
      name: '絵画',
    },
    title: 'テスト',
    thumbnail: '/images/category/drawing.jpeg',
    price: 30000,
    description: '説明',
    vertical_length: 500,
    horizontal_length: 500,
    is_published: true,
  },
];

const Login = () => {
  return <Template products={products} />;
};

export default Login;
