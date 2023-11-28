import React, { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import Grid from '../Grid/Grid';
import Search from '../Search/Search';
import Loader from '../Loader/Loader';
import MarketCard from '../MarketCard/MarketCard';
import useFetchList from '../../hooks/useFetchList';
import { HeaderTitle } from '../../constants/constants';
import { getMarketsByCrypto, setFilterMarket } from '../../actions/market/market.action';

import { IMarketStore } from './IMarket';
import marketStyle from './Market.style';
import { setCurrentExchange } from '../../actions/exchange/exchange.action';
import BackButton from '../BackButton/BackButton';
import Error from '../Error/Error';

const MarketHeader = styled.div`${marketStyle.header}`;
const ExchangeRightHeader = styled.div`${marketStyle.rightHeader}`;
const CardButton = styled.button`${marketStyle.cardButton}`;

/**
 * Render the Markets list component
 */
function Markets() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    marketsFiltered, currentCryptoId, currentCryptoName,
  } = useSelector((state: IMarketStore) => state.getMarketsByCrypto);
  const { loading, error } = useFetchList({endPoint: `coin/markets/?id=${currentCryptoId}`, callbackPayload: getMarketsByCrypto});
  
  const onChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterMarket(e.target.value));
  }, []);
  
  const onSelectExchange = useCallback((name: string) => {
    dispatch(setCurrentExchange(name));
    navigate('/detail');
  }, []);

  if (error) return <Error message={error} />;  

  if (loading) return <Loader />;
  
  return (
    <>
      <MarketHeader>
        <ExchangeRightHeader>
          <BackButton />
          <HeaderTitle>{currentCryptoName} exchanges</HeaderTitle>
        </ExchangeRightHeader>
        <Search onChangeHandler={onChangeSearch} />
      </MarketHeader>
      <Grid>
        {marketsFiltered?.map((item, index) => (
          <CardButton key={`market-card-${index}`} onClick={() => onSelectExchange(item.name)}>
            <MarketCard title={item.name} market={item}/>
          </CardButton>
        ))}
      </Grid>
    </>
  );
}

export default Markets;
