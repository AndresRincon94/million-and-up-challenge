import React, { ChangeEvent, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import MarketCard from '../MarketCard/MarketCard';
import Grid from '../Grid/Grid';
import { useFetchList } from '../../hooks/useFetchList';
import { getExchange, getExchangeDetail, setFilterExchange } from '../../actions/exchange/exchange.action';
import { HeaderTitle } from '../../constants/constants';
import Loader from '../Loader/Loader';
import Search from '../Search/Search';

import { IExchangeStore } from './IExchange';
import exchangeStyle from './Exchange.style';

const ExchangeHeader = styled.div`${exchangeStyle.header}`;
const HeaderLink = styled.a`${exchangeStyle.link}`;

function Exchanges() {
  const dispatch = useDispatch();
  const {
    currentExchange, currentExchangeId, currentExchangeName, currentPairsFiltered
  } = useSelector((state: IExchangeStore) => state.getExchange);
  const { loading, error } = useFetchList({endPoint: 'exchanges/', callbackPayload: getExchange});
  const {
    loading: detailLoading, error: detailError
  } = useFetchList({endPoint: `exchange/?id=${currentExchangeId}`, callbackPayload: getExchangeDetail});

  const onChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterExchange(e.target.value));
  }, []);

  if (error || detailError) return <span>Error: {error}{detailError}</span>;

  if (loading || detailLoading) return <Loader />;
  
  
  return (
    <>
    <ExchangeHeader>
      <HeaderLink href={currentExchange.data.url} target="_blank" rel="noreferrer">
        <HeaderTitle>{currentExchangeName}</HeaderTitle>
      </HeaderLink>
      <Search onChangeHandler={onChangeSearch} />
    </ExchangeHeader>
      <Grid>
        {currentPairsFiltered.map((item, index) => (
          <MarketCard key={`exchange-card-${index}`} market={item} />
        ))}
      </Grid>
    </>
  );
}

export default Exchanges;
