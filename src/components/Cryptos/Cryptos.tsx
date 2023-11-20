import { useSelector } from "react-redux";
import styled from "styled-components";

import { getCryptos } from "../../actions/crypto.action";
import Loader from "../Loader/Loader";

import { ICryptoStore } from "./ICrypto";
import cryptoStyle, { ITableData } from "./Cryptos.style";
import { useCallback, useEffect, useState } from "react";
import { useFetchPagination } from "../../hooks/useFetchPagination";
import Pagination from "../Pagination/Pagination";

const CryptoTable = styled.table`${cryptoStyle.table}`;
const CryptoTableBody = styled.tbody`${cryptoStyle.tableBody}`;
const CryptoTableHeader = styled.thead`${cryptoStyle.tableHeader}`;
const CryptoTableData = styled.td<ITableData>`${cryptoStyle.tableData}`;

function Cryptos() {
  const [startPage, setStartPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const { loading, error } = useFetchPagination(
    `tickers/?start=${startPage}&limit=${pageLimit}`,
    getCryptos,
    startPage,
    pageLimit
  );
  const { cryptos, info } = useSelector(
    (state: ICryptoStore) => state.getCryptos
  );

  const nextPage = useCallback(
    (page: number) => {
      setStartPage(page);
    },
    [pageLimit]
  );

  useEffect(() => {
    setTotalPages(Math.ceil(info.coins_num / pageLimit));
  }, [info.coins_num, pageLimit]);

  if (error) return <span>Error: {error}</span>;

  if (loading) return <Loader />;

  return (
    <Pagination
      initialPage={startPage}
      pageLimit={pageLimit}
      totalRecords={info.coins_num}
      setInitialPage={setStartPage}
      setPageLimit={setPageLimit}
    >
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
