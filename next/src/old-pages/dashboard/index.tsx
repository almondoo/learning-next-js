import Template from '../../components/templates/dashboard/index';
import type { ProductTable } from '../../models/product';
import { Columns } from '../../models/table';

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
    isSold: true,
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
    format: (price): string => `${price}円`,
  },
];

const DashBoard = () => {
  return <Template columns={columns} soldOutProducts={products} />;
};

export default DashBoard;
