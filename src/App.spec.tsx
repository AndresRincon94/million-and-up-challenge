import React  from 'react';
import { screen } from '@testing-library/react';

import App from './App';
import { renderWithProviders } from './utils/testUtils';

describe('App page', () => {
  it('should render the crypto table', () => {
   renderWithProviders(
      <App />,
      {preloadedState: {}}
    );

    const appElement = screen.getByLabelText('app');
    expect(appElement).toBeInTheDocument();
  });
});
