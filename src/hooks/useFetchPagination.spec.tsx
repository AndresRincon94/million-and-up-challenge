import React, { ReactNode } from "react";
import * as ReactRedux from 'react-redux';
import { renderHook, waitFor } from "@testing-library/react";


import useFetchPagination from "./useFetchPagination";
import { getCryptos } from "../actions/crypto/crypto.action";
import setupStore from "../stores/root.store";

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}));

const wrapper = ({ children }: { children: ReactNode }) => (
  <ReactRedux.Provider store={setupStore()}>{children}</ReactRedux.Provider>
)

describe('UseFetchPagination', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should response with default fetch', () => {
    const dispatchMock = jest.spyOn(ReactRedux, 'useDispatch');

    const { result } = renderHook(useFetchPagination, {
      initialProps: {
        endPoint: `tickers/?start=1&limit=10`,
        callbackPayload: getCryptos,
        startRecord: 0,
        pageLimit: 10
    },
    wrapper
  });

    expect(result.current).toEqual({ loading: true, error: null });
    expect(dispatchMock).toHaveBeenCalled();
  });

  it('should response loading false when finish the fetch', async () => {
    const dispatchMock = jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(jest.fn());;

    const { result } = renderHook(useFetchPagination, {
      initialProps: {
        endPoint: `tickers/?start=1&limit=10`,
        callbackPayload: getCryptos,
        startRecord: 0,
        pageLimit: 10
    },
    wrapper
  });

    expect(result.current).toEqual({ loading: true, error: null });
    expect(dispatchMock).toHaveBeenCalled();

    await waitFor(() => {
      expect(result.current).toEqual({ loading: false, error: null });
    });
  });

  it('should response error when catch the fetch error', async () => {
    const dispatchMock = jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(jest.fn());
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error("Internal server error"));

    const { result } = renderHook(useFetchPagination, {
      initialProps: {
        endPoint: `tickers/?start=1&limit=10`,
        callbackPayload: getCryptos,
        startRecord: 0,
        pageLimit: 10
      },
      wrapper
    });

    await waitFor(() => {
      expect(result.current).toEqual(expect.objectContaining({ loading: false }));
      expect(result.current).toEqual(expect.objectContaining(/Error: Internal server error/));
    });
  });
})