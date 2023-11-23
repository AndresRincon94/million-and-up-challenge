import { css } from 'styled-components';

export interface ITableData {
  value: string;
}

const cryptoStyle = {
  table: css`
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;

    & td, 
    & th {
      padding: 15px;
      text-align: center;
    }
  `,
  tableHeader: css`
    background-color: #000963;
    color: #fff;
  `,
  tableBody: css`
    width: 100%;

    & tr:nth-child(odd) {
      background-color: #fff;
    }
    
    & tr:nth-child(even) {
      background-color: #eee;
    }
  `,
  tableData: ({ value }: ITableData) => (css`
    color: ${Number(value) >= 0 ? '#16c784' : '#ea3943'};
    font-weight: bold;
  `)
};

export default cryptoStyle;
