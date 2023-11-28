import React from 'react';
import { screen } from '@testing-library/react';
import * as redux from 'react-redux';

import * as useFetchList from '../../hooks/useFetchList';
import { renderWithProviders } from '../../utils/testUtils';
import { defaultStateMarketsMock } from '../../__mocks__/market.mock';

import Markets from './Markets';
import { IMarketSelector } from './IMarket';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}));

describe('Markets', () => {
  it('should render the crypto exchanges', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => defaultStateMarketsMock);
    jest.spyOn(useFetchList, 'default')
      .mockImplementation(() => ({ loading: false, error: null }));

    renderWithProviders(
      <Markets />,
      {preloadedState: { getMarketsByCrypto: defaultStateMarketsMock }}
    );

    const title = screen.getByText('Bitcoin exchanges', { selector: 'h1'});

    expect(title).toBeInTheDocument();
  });

  it('should render the exchange markets', () => {
    jest.spyOn(redux, 'useSelector').mockImplementation(() => defaultStateMarketsMock);
    jest.spyOn(useFetchList, 'default')
      .mockImplementation(() => ({ loading: false, error: null }));

    renderWithProviders(
      <Markets />,
      {preloadedState: { getMarketsByCrypto: defaultStateMarketsMock }}
    );

    const title = screen.getByText('Bitcoin exchanges', { selector: 'h1'});
    const grid = screen.getByLabelText('grid');

    expect(title).toBeInTheDocument();
    expect(grid.childElementCount).toBe(2);
  });

  it('should render the exchange markets', () => {
    const emptyMarkets = {} as IMarketSelector;
    jest.spyOn(redux, 'useSelector').mockImplementation(() => emptyMarkets);
    jest.spyOn(useFetchList, 'default')
      .mockImplementation(() => ({ loading: false, error: null }));

    renderWithProviders(
      <Markets />,
      {preloadedState: { getMarketsByCrypto: emptyMarkets }}
    );

    const title = screen.queryByText('Bitcoin exchanges', { selector: 'h1'});
    const grid = screen.queryByLabelText('grid');

    expect(title).not.toBeInTheDocument();
    expect(grid?.childElementCount).toBe(0);
  });

  it('should render the loader when fetch is loading', () => {
    const emptyMarkets = {} as IMarketSelector;
    jest.spyOn(redux, 'useSelector').mockImplementation(() => emptyMarkets);
    jest.spyOn(useFetchList, 'default')
      .mockImplementation(() => ({ loading: true, error: null }));

    renderWithProviders(
      <Markets />,
      {preloadedState: { getMarketsByCrypto: emptyMarkets }}
    );

    const loaderElement = screen.getByLabelText('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('should render the loader when fetch is loading', () => {
    const emptyMarkets = {} as IMarketSelector;
    jest.spyOn(redux, 'useSelector').mockImplementation(() => emptyMarkets);
    jest.spyOn(useFetchList, 'default')
      .mockImplementation(() => ({ loading: true, error: null }));

    renderWithProviders(
      <Markets />,
      {preloadedState: { getMarketsByCrypto: emptyMarkets }}
    );

    const loaderElement = screen.getByLabelText('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  it('should render error if fetch response with error', () => {
    const emptyMarkets = {} as IMarketSelector;
    jest.spyOn(redux, 'useSelector').mockImplementation(() => emptyMarkets);
    jest.spyOn(useFetchList, 'default')
      .mockImplementation(() => ({ loading: false, error: 'Internal server error' }));

    renderWithProviders(
      <Markets />,
      {preloadedState: { getMarketsByCrypto: emptyMarkets }}
    );

    const errorElement = screen.getByText(/Internal server error/);
    expect(errorElement).toBeInTheDocument();
  });
});
