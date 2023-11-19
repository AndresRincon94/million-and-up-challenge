 import { useSelector } from "react-redux";
import styled from "styled-components";

import { getCryptos } from "../../actions/crypto.action";
import Loader from "../Loader/Loader";

import { ICryptoStore } from "./ICrypto";
import cryptoStyle, { ITableData } from "./Cryptos.style";
import { useCallback, useState } from "react";
import { useFetchPagination } from "../../hooks/useFetchPagination";

const CryptoTable = styled.table`${cryptoStyle.table}`;
const CryptoTableBody = styled.tbody`${cryptoStyle.tableBody}`;
const CryptoTableHeader = styled.thead`${cryptoStyle.tableHeader}`;
const CryptoTableData = styled.td<ITableData>`${cryptoStyle.tableData}`;

function Cryptos() {
  const [ startPage, setStartPage ] = useState(0)
  const [ limitPage, setLimitPage ] = useState(10)
  const { loading, error } = useFetchPagination(
    `tickers/?start=${startPage}&limit=${limitPage}`,
    getCryptos,
    startPage,
    limitPage
  );
  const { cryptos, info } = useSelector((state: ICryptoStore) => state.getCryptos);

  const nextPage = useCallback(() => {
    setStartPage((prev) => prev + limitPage)
  }, [limitPage]);

  if (error) return <span>Error: {error}</span>;

  if (loading) return <Loader />;

  return (
    <>
      <p>Coins number: {info.coins_num}</p>
      <p>Time: {info.time}</p>
      <button onClick={nextPage}>Next</button>
      <select
        className="form-control"
        value={limitPage}
        onChange={e =>
          setLimitPage(parseInt(e.target.value))
        }
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <br />
      <CryptoTable>
        <CryptoTableHeader>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>Price (BTC)</th>
            <th>Market Cap.</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
          </tr>
        </CryptoTableHeader>
        <CryptoTableBody>
          {cryptos?.map((item, i) => (
            <tr>
              <td>{item.rank}</td>
              <td>{item.name}</td>
              <td>$ {item.price_usd}</td>
              <td>{item.price_btc}</td>
              <td>{item.market_cap_usd}</td>
              <CryptoTableData valueData={item.percent_change_1h}>{item.percent_change_1h}</CryptoTableData>
              <CryptoTableData valueData={item.percent_change_24h}>{item.percent_change_24h}</CryptoTableData>
              <CryptoTableData valueData={item.percent_change_7d}>{item.percent_change_7d}</CryptoTableData>
            </tr>
          ))}
        </CryptoTableBody>
      </CryptoTable>
    </>
  );
}

export default Cryptos;
