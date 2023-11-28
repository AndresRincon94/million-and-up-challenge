import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './MarketCard';

describe('MarketCard', () => {
  it('Render default Card', () => {
    render(
      <Card title={'Default title'}  />
    );

    const cardTitle = screen.getByText('Default title');

    expect(cardTitle).toBeInTheDocument();
  });
});
