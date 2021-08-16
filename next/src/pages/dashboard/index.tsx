import Template from '../../components-v2/templates/dashboard/index/index';
import type { ProductTable } from '../../models/product';
import type { Columns } from '../../models/table';

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
    format: (price): string => `${String(price)}円`,
  },
];

const DashBoard = () => {
  return <Template columns={columns} soldOutProducts={products} />;
};

export default DashBoard;
