import Style from './style';
import Link from '../link/index';
import type { Columns } from '../../../models/table';

type Props<T> = {
  columns: Columns[];
  url?: string;
  height?: number;
  rows: T;
};

function Table<T>({ columns, rows, url, height = 440, ...props }: Props<T>) {
  return (
    <Style.TableContainer maxHeigth={height} {...props}>
      <Style.Table>
        <Style.TableHead>
          <Style.TableHeadRow>
            {columns.map((v, i) => (
              <Style.TableHeadHeader key={i}>{v.name}</Style.TableHeadHeader>
            ))}
            {url && <Style.TableHeadHeader>編集</Style.TableHeadHeader>}
          </Style.TableHeadRow>
        </Style.TableHead>
        <Style.TableBody>
          {rows.map((row, i: number) => {
            return (
              <Style.TableBodyRow key={i}>
                {columns.map((column, i) => {
                  const value = row[column.id];
                  return (
                    <Style.TableBodyData key={i}>
                      {column.format ? column.format<typeof value>(value) : value}
                    </Style.TableBodyData>
                  );
                })}
                {url && (
                  <Style.TableBodyData>
                    <Link href={`${url}/${row['id']}`}>
                      <Style.Setting />
                    </Link>
                  </Style.TableBodyData>
                )}
              </Style.TableBodyRow>
            );
          })}
        </Style.TableBody>
      </Style.Table>
    </Style.TableContainer>
  );
}

export default Table;
