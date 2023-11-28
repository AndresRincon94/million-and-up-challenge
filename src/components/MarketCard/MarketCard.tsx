import React, { useCallback } from 'react';
import styled from 'styled-components';

import cardStyle from './MarketCard.style';
import IMarketCard from './IMarketCard';
import { TextFull } from '../../constants/constants';

const CardWrapper = styled.div`${cardStyle.wrapper}`;
const CardHeader = styled.h2`${cardStyle.header}`;
const CardBody = styled.div`${cardStyle.body}`;

/**
 * Render the Market Card
 *
 * @param IMarketCard - Market card props 
 * @param IMarketCard.action - Callback action button
 * @param IMarketCard.children - Component to render in the card body
 * @param IMarketCard.title - Card header title
 */
function MarketCard({
  action,
  market,
  title,
}: IMarketCard) {
  const callback = useCallback(() => {
    action?.();
  }, [action]);

  return (
    <CardWrapper onClick={callback}>
      {title && (
        <CardHeader>{title}</CardHeader>
      )}
      {market && (
        <CardBody>
          <TextFull><span>Base: </span>{market.base}</TextFull>
          <TextFull><span>Quote: </span>{market.quote}</TextFull>
          <TextFull><span>Price: </span>${market.price_usd.toFixed(2)}</TextFull>
          <TextFull><span>Vol:</span>{market.volume.toFixed(2)}</TextFull>
        </CardBody>
      )}
    </CardWrapper>
  );
}

export default MarketCard;
