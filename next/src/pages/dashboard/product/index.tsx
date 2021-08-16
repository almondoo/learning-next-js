import Template from '../../../components-v2/templates/dashboard/product/index';
import { ProductTable } from '../../../models/product';
import { Columns } from '../../../models/table';

const products: ProductTable[] = [
  {
    id: 1,
    title: 'テストテストテストテストテストテストテストテスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
  {
    id: 2,
    title: 'テスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
  {
    id: 3,

    title: 'テスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
  {
    id: 11,

    title: 'テストテストテストテストテストテストテストテスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
  {
    id: 21,

    title: 'テスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
  {
    id: 31,

    title: 'テスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
  {
    id: 12,

    title: 'テストテストテストテストテストテストテストテスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
  {
    id: 23,

    title: 'テスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
  {
    id: 33,

    title: 'テスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
  {
    id: 14,

    title: 'テストテストテストテストテストテストテストテスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
  {
    id: 24,
    title: 'テスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
  {
    id: 34,

    title: 'テスト',
    price: 30000,
    isPublished: true,
    isSold: false,
  },
];

const columns: Columns[] = [
  {
    name: 'ID',
    id: 'id',
  },
  {
    name: 'タイトル',
    id: 'title',
  },
  {
    name: '金額',
    id: 'price',
    format: (value): string => `${String(value)}円`,
  },
  {
    name: '公開状態',
    id: 'isPublished',
    format: (value): string => (value ? '公開' : '非公開'),
  },
  { name: '販売状況', id: 'isSold', format: (value): string => (value ? 'sold out' : '販売中') },
];

const DashBoard = () => {
  return <Template products={products} columns={columns} />;
};

export default DashBoard;
