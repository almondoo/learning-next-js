import Style from './style';
import DashBoardWrap from '../../organisms/dashboardWrap/index';
import Table from '../../atoms/table/index';
import type { Columns } from '../../../models/table';
import type { ProductTable } from '../../../models/product';

type Props = {
  columns: Columns[];
  soldOutProducts: ProductTable[];
};

const DashBoard = ({ columns, soldOutProducts, ...props }: Props): JSX.Element => {
  return (
    <DashBoardWrap>
      <Style.Wrapper {...props}>
        <Style.Title>ダッシュボード</Style.Title>
        <Style.PriceWrap>
          <Style.PriceCard>
            <p>売り上げ</p>
            <Style.Price>1000 円</Style.Price>
          </Style.PriceCard>
          <Style.PriceCard>
            <p>売り上げ</p>
            <Style.AllPrice>100000 円</Style.AllPrice>
          </Style.PriceCard>
        </Style.PriceWrap>
        <Style.SecondTitle>売却された作品</Style.SecondTitle>
        <Table columns={columns} rows={soldOutProducts} />
      </Style.Wrapper>
    </DashBoardWrap>
  );
};

export default DashBoard;
