import Style from './style';
import DashBoardWrap from '../../../organisms/dashboardWrap/index';
import Table from '../../../atoms/table/index';
import Link from '../../../atoms/link/index';
import Button from '../../../atoms/button/index';
import type { ProductTable } from '../../../../models/product';
import type { Columns } from '../../../../models/table';

type Props = {
  products: ProductTable[];
  columns: Columns[];
};

const DashBoard = ({ products, columns, ...props }: Props): JSX.Element => {
  return (
    <DashBoardWrap>
      <Style.Wrapper {...props}>
        <Style.Head>
          <Style.Title>作品一覧</Style.Title>
          <Link href="/dashboard/product/new" isUnderline={false}>
            <Button>作品追加</Button>
          </Link>
        </Style.Head>
        <Table<ProductTable[]> columns={columns} rows={products} url="/dashboard/product" />
      </Style.Wrapper>
    </DashBoardWrap>
  );
};

export default DashBoard;
