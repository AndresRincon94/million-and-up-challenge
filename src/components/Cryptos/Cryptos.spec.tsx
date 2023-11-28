import React from 'react';
import { screen } from '@testing-library/react';
import * as redux from 'react-redux';

import { cryptosDefaultMock } from '../../__mocks__/cryptos.mock';
import * as useFetchPaginationModule from '../../hooks/useFetchPagination';
import { renderWithProviders } from '../../utils/testUtils';

import Cryptos from './Cryptos';
import ICryptoSelector from './ICrypto';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn()
}));

describe('Cryptos', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render the crypto table with data', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => cryptosDefaultMock);
    jest.spyOn(useFetchPaginationModule, 'default')
      .mockImplementation(() => ({ loading: false, error: null }));

    renderWithProviders(
      <Cryptos />,
      {preloadedState: { getCryptos: cryptosDefaultMock }}
    );

    const cryptoTableElement = screen.getByLabelText('crypto-table');
    const cryptoTableBody = cryptoTableElement.lastElementChild;

    expect(cryptoTableElement).toBeInTheDocument();
    expect(cryptoTableBody?.childElementCount).toBe(3);
  });

  it('should render the not found records label', () => {
    const emptyRecords = {} as ICryptoSelector;
    jest.spyOn(redux, 'useSelector').mockImplementation(() => emptyRecords);
    jest.spyOn(useFetchPaginationModule, 'default')
      .mockImplementation(() => ({ loading: false, error: null }));

    renderWithProviders(
      <Cryptos />,
      {preloadedState: { getCryptos: undefined }}
    );

    const cryptoTableElement = screen.queryByLabelText('crypto-table');

    expect(cryptoTableElement).not.toBeInTheDocument();
    expect(screen.getByText('No records found')).toBeInTheDocument();
  });

  it('should render loader if fetch is loading', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => cryptosDefaultMock);
    jest.spyOn(useFetchPaginationModule, 'default')
      .mockImplementation(() => ({ loading: true, error: null }));

    renderWithProviders(
      <Cryptos />,
      {preloadedState: { getCryptos: cryptosDefaultMock }}
    );

    const loaderElement = screen.getByLabelText('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('should render error if fetch response with error', () => {
    const emptyRecords = {} as ICryptoSelector;
    jest.spyOn(redux, 'useSelector').mockImplementation(() => emptyRecords);
    jest.spyOn(useFetchPaginationModule, 'default')
      .mockImplementation(() => ({ loading: true, error: 'Internal server error' }));

    renderWithProviders(
      <Cryptos />,
      {preloadedState: { getCryptos: undefined }}
    );

    const errorElement = screen.getByText(/Internal server error/);
    expect(errorElement).toBeInTheDocument();
  });
});
