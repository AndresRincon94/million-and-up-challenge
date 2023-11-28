import React, { ReactNode } from 'react';
import * as ReactRedux from 'react-redux';
import { renderHook, waitFor } from '@testing-library/react';
import * as logger from 'loglevel';


import useFetchList from './useFetchList';
import setupStore from '../stores/root.store';
import { getMarketsByCrypto } from '../actions/market/market.action';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}));

jest.mock('loglevel', () => ({
  ...jest.requireActual('loglevel'),
  error: jest.fn()
}));

const wrapper = ({ children }: { children: ReactNode }) => (
  <ReactRedux.Provider store={setupStore()}>{children}</ReactRedux.Provider>
);

describe('UseFetchList', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should response with default fetch', () => {
    const dispatchMock = jest.spyOn(ReactRedux, 'useDispatch');

    const { result } = renderHook(useFetchList, {
      initialProps: {
        endPoint: 'coin/markets/?id=80',
        callbackPayload: getMarketsByCrypto,
    },
    wrapper
  });

    expect(result.current).toEqual({ loading: true, error: null });
    expect(dispatchMock).toHaveBeenCalled();
  });

  it('should response error when catch the fetch error', async () => {
    const loggerSpy = jest.spyOn(logger, 'error');
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(jest.fn());
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Internal server error'));

    const { result } = renderHook(useFetchList, {
      initialProps: {
        endPoint: 'coin/markets/?id=80',
        callbackPayload: getMarketsByCrypto,
      },
      wrapper
    });

    await waitFor(() => {
      expect(result.current).toEqual(expect.objectContaining({ loading: false }));
      expect(result.current).toEqual(expect.objectContaining(/Error: Internal server error/));
      expect(loggerSpy).toHaveBeenCalled();
    });
  });
});
