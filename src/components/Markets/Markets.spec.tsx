import React from 'react';
import { render, screen } from '@testing-library/react';

import Markets from './Markets';

describe('Markets', () => {
  it('Render default Markets', () => {
    render(
      <Markets />
    );

    const marketTitle = screen.getByText('Exchanges');

    expect(marketTitle).toBeInTheDocument();
  });
});
