import React from 'react';
import { render, screen } from '@testing-library/react';

import MarketCard from './MarketCard';
import { marketsMock } from '../../__mocks__/market.mock';

describe('MarketCard', () => {
  it('should render default market card', () => {
    render(
      <MarketCard title={'Default title'} market={marketsMock[0]} />
    );

    const cardTitle = screen.getByText('Default title');
    const cardDetail = screen.getByLabelText('card-detail');

    expect(cardTitle).toBeInTheDocument();
    expect(cardDetail).toBeInTheDocument();
    expect(cardDetail.childElementCount).toBe(4);
  });

  it('should not render not render title when it is undefined', () => {
    render(
      <MarketCard market={marketsMock[0]}/>
    );

    const cardTitle = screen.queryByText('Default title');

    expect(cardTitle).not.toBeInTheDocument();
  });

  it('should not render not render details when the market undefined', () => {
    render(
      <MarketCard title={'Default title'} />
    );

    const cardDetail = screen.queryByLabelText('card-detail');

    expect(cardDetail).not.toBeInTheDocument();
  });
});
