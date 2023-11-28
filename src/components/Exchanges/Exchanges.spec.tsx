import React from 'react';
import { render, screen } from '@testing-library/react';

import Exchanges from './Exchanges';

describe('Markets', () => {
  it('Render default Markets', () => {
    render(
      <Exchanges />
    );

    const marketTitle = screen.getByText('Exchanges');

    expect(marketTitle).toBeInTheDocument();
  });
});
