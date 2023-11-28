import React, { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import Pagination from '../Pagination/Pagination';
import { getCryptos } from '../../actions/crypto/crypto.action';
import useFetchPagination from '../../hooks/useFetchPagination';

import { ICryptoStore } from './ICrypto';
import cryptoStyle, { ITableDataStyle } from './Cryptos.style';
import { setCurrentCrypto } from '../../actions/market/market.action';

const CryptoTable = styled.table`${cryptoStyle.table}`;
const CryptoTableBody = styled.tbody`${cryptoStyle.tableBody}`;
const CryptoTableHeader = styled.thead`${cryptoStyle.tableHeader}`;
const CryptoTableData = styled.td<ITableDataStyle>`${cryptoStyle.tableData}`;
const CryptoTableButton = styled.button`${cryptoStyle.button}`;

/**
 * Render the table with cryptos data
 */
function Cryptos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const onSelectCrypto = useCallback((name: string, currentId: string) => {
    dispatch(setCurrentCrypto({name, currentId}));
    navigate('/exchanges');
  }, []);

  if (error !== null) return <Error message={error} />;

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
            <th>Action</th>
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
              <td>
                <CryptoTableButton onClick={() => onSelectCrypto(item.name, item.id)}>Exchanges</CryptoTableButton>
              </td>
            </tr>
          ))}
        </CryptoTableBody>
      </CryptoTable>
    </Pagination>
  );
}

export default Cryptos;
