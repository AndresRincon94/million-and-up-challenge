import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { getCryptos } from "../../actions/crypto/crypto.action";
import useFetchPagination from "../../hooks/useFetchPagination";

import { ICryptoStore } from "./ICrypto";
import cryptoStyle, { ITableData } from "./Cryptos.style";

const CryptoTable = styled.table`${cryptoStyle.table}`;
const CryptoTableBody = styled.tbody`${cryptoStyle.tableBody}`;
const CryptoTableHeader = styled.thead`${cryptoStyle.tableHeader}`;
const CryptoTableData = styled.td<ITableData>`${cryptoStyle.tableData}`;

/**
 * Render the table with cryptos data
 */
function Cryptos() {
  const [startRecord, setStartRecord] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const { loading, error } = useFetchPagination({
    endPoint: `tickers/?start=${startRecord}&limit=${pageLimit}`,
    callbackPayload: getCryptos,
    startRecord,
    pageLimit
  });
  const { cryptos, info } = useSelector(
    (state: ICryptoStore) => state.getCryptos
  );

  if (error !== null) return <span>Error: {error}</span>;

  if (loading) return <Loader />;

  if(!cryptos || cryptos.length === 0) return <h3>No records found</h3>;

  return (
    <Pagination
      startRecord={startRecord}
      pageLimit={pageLimit}
      totalRecords={info?.coins_num}
      setStartRecord={setStartRecord}
      setPageLimit={setPageLimit}
    >
      <CryptoTable aria-label="crypto-table">
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
          {cryptos?.map((item) => (
            <tr key={`coin-${item.id}`}>
              <td>{item.rank}</td>
              <td>{item.name}</td>
              <td>${item.price_usd}</td>
              <td>{item.price_btc}</td>
              <td>{item.market_cap_usd}</td>
              <CryptoTableData value={item.percent_change_1h}>
                {item.percent_change_1h}
              </CryptoTableData>
              <CryptoTableData value={item.percent_change_24h}>
                {item.percent_change_24h}
              </CryptoTableData>
              <CryptoTableData value={item.percent_change_7d}>
                {item.percent_change_7d}
              </CryptoTableData>
            </tr>
          ))}
        </CryptoTableBody>
      </CryptoTable>
    </Pagination>
  );
}

export default Cryptos;
