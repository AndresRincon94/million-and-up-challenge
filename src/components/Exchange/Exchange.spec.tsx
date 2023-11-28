import React from 'react';
import { screen } from '@testing-library/react';
import * as redux from 'react-redux';

import { renderWithProviders } from '../../utils/testUtils';

import Exchange from './Exchange';
import * as useFetchList from '../../hooks/useFetchList';
import { defaultStateExchange, emptyStateExchange } from '../../__mocks__/exchange.mock';
import { IExchangeSelector } from './IExchange';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}));

describe('Exchange', () => {
  it('should render the exchange detail', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => defaultStateExchange);
    jest.spyOn(useFetchList, 'default')
      .mockImplementation(() => ({ loading: false, error: null }));

    renderWithProviders(
      <Exchange />,
      {preloadedState: { getExchange: defaultStateExchange }}
    );

    const title = screen.getByText('Binance', { selector: 'h1'});

    expect(title).toBeInTheDocument();
    expect(title.parentElement).toHaveAttribute('href', 'https:www.binance.com');
  });

  it('should render the exchange pairs', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => defaultStateExchange);
    jest.spyOn(useFetchList, 'default')
      .mockImplementation(() => ({ loading: false, error: null }));

    renderWithProviders(
      <Exchange />,
      {preloadedState: { getExchange: defaultStateExchange }}
    );

    const title = screen.getByText('Binance', { selector: 'h1'});
    const grid = screen.getByLabelText('grid');

    expect(title).toBeInTheDocument();
    expect(grid.childElementCount).toBe(2);
  });

  it('should not render the exchange pairs when it is empty', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => emptyStateExchange);
    jest.spyOn(useFetchList, 'default')
      .mockImplementation(() => ({ loading: false, error: null }));

    renderWithProviders(
      <Exchange />,
      {preloadedState: { getExchange: emptyStateExchange }}
    );

    const title = screen.queryByText('Binance', { selector: 'h1'});
    const grid = screen.queryByLabelText('grid');

    expect(title).not.toBeInTheDocument();
    expect(grid?.childElementCount).toBe(0);
  });

  it('should render the loader when fetch is loading', () => {
    const emptyRecords = {} as IExchangeSelector;
    jest.spyOn(redux, 'useSelector').mockImplementation(() => emptyRecords);
    jest.spyOn(useFetchList, 'default')
      .mockImplementation(() => ({ loading: true, error: null }));

    renderWithProviders(
      <Exchange />,
      {preloadedState: { getExchange: emptyRecords }}
    );

    const loaderElement = screen.getByLabelText('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('should render error if fetch response with error', () => {
    const emptyRecords = {} as IExchangeSelector;
    jest.spyOn(redux, 'useSelector').mockImplementation(() => emptyRecords);
    jest.spyOn(useFetchList, 'default')
      .mockImplementation(() => ({ loading: true, error: 'Internal server error' }));

    renderWithProviders(
      <Exchange />,
      {preloadedState: { getExchange: emptyRecords }}
    );

    const errorElement = screen.getByText(/Internal server error/);
    expect(errorElement).toBeInTheDocument();
  });
});
