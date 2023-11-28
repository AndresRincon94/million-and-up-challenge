import { css } from 'styled-components';

export interface ITableDataStyle {
  value: string;
}

const cryptoStyle = {
  table: css`
    border-collapse: collapse;
    margin: 10px 0;
    table-layout: fixed;
    width: 100%;

    & td,
    & th {
      padding: 5px;
      text-align: center;
    }
  `,
  tableHeader: css`
    background-color: #000963;
    color: #fff;
    
    & th {
      padding: 15px;
    }
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
  tableData: ({ value }: ITableDataStyle) => css`
    color: ${Number(value) >= 0 ? '#16c784' : '#ea3943'};
    font-weight: bold;
  `,
  button: css`
    background-color: #000963;
    border: none;
    border-radius: 3px;
    color: white;
    padding: 10px 14px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  `,
};

export default cryptoStyle;
