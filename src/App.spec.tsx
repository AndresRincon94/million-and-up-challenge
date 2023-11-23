import React  from 'react';
import * as redux from 'react-redux';
import { screen } from '@testing-library/react';

import App from './App';
import { renderWithProviders } from './utils/testUtils';
import * as useFetchPaginationModule from './hooks/useFetchPagination';
import { cryptosDefaultMock } from './__mocks__/cryptos.mock';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}));

describe('App page', () => {
  it('should render the crypto table', () => {
    jest.spyOn(useFetchPaginationModule, 'default').mockImplementation(() => (
      { loading: false, error: null }
    ));
    jest.spyOn(redux, 'useSelector').mockImplementation(() => cryptosDefaultMock);

    renderWithProviders(
      <App />,
      {preloadedState: { getCryptos: cryptosDefaultMock }}
    );

    const cryptoTableElement = screen.getByLabelText('crypto-table');
    expect(cryptoTableElement).toBeInTheDocument();
  });
});
