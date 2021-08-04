import styled from 'styled-components';
import variable from '../../common/variable';

const TableContainer = styled.div<{ maxHeigth: number }>`
  width: 100%;
  border: 1px solid ${variable.color.lightGray};
  border-radius: 5px;
  font-size: 14px;
  max-height: ${({ maxHeigth }) => maxHeigth}px;
  overflow-y: scroll;
`;

const Header = styled.div`
  padding: 10px;
`;

const Table = styled.table`
  width: 100%;
`;

const TableHead = styled.thead`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${variable.color.lightGray};
  border-bottom: 1px solid #000;
  white-space: nowrap;
`;

const TableHeadRow = styled.tr``;

const TableHeadHeader = styled.th`
  padding: 15px 20px;
  font-size: 1.1em;
  text-align: right;
  vertical-align: middle;

  &:first-of-type {
    text-align: left;
  }
`;

const TableBody = styled.tbody``;

const TableBodyRow = styled.tr`
  border-top: 1px solid ${variable.color.lightGray};
  /* height: 50px; */

  &:hover {
    background-color: ${variable.color.whitesmoke};
  }
`;

const TableBodyData = styled.td`
  padding: 15px 20px;
  text-align: right;
  vertical-align: middle;
  white-space: nowrap;

  &:first-of-type {
    text-align: left;
  }
`;

const Setting = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background-image: url('/images/svg/cog.svg');
  background-repeat: no-repeat;
`;

const exportDefault = {
  TableContainer,
  Header,
  Table,
  TableHead,
  TableHeadRow,
  TableHeadHeader,
  TableBody,
  TableBodyRow,
  TableBodyData,
  Setting,
};

export default exportDefault;
