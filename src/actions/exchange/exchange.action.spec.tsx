import { defaultExchangeMock, exchangeListResponseArrayMock, exchangeResponseArrayMock, pairsMock } from '../../__mocks__/exchange.mock';
import { IExchangeSelector } from '../../components/Exchange/IExchange';

import exchangeReducer, { getExchange, getExchangeDetail, setCurrentExchange, setFilterExchange } from './exchange.action';

describe('ExchangeAction', () => {
  it('should return the initial state', () => {
    expect(exchangeReducer(undefined, { type: undefined })).toEqual({
      currentExchange: {},
      currentExchangeId: 5,
      currentExchangeName: '',
      currentPairsFiltered: [],
    });
  });

  describe('getExchange', () => {
    it('should return the specific exchange', () => {
      const previousState = {
        currentExchangeName: 'Binance'
      } as IExchangeSelector;
      expect(exchangeReducer(previousState, getExchange(exchangeListResponseArrayMock))).toEqual({
        currentExchangeId: 5,
        currentExchangeName: 'Binance',
      });
    });
  
    it('should return the empty exchange', () => {
      const previousState = {} as IExchangeSelector;
      expect(exchangeReducer(previousState, getExchange([]))).toEqual({
        currentExchangeId: 0
      });
    });
  });

  describe('getExchangeDetail', () => {
    it('should return the specific exchange detail', () => {
      const previousState = {
        currentExchangeName: 'Binance',
        currentExchange: {},
      } as IExchangeSelector;
      expect(exchangeReducer(previousState, getExchangeDetail(exchangeResponseArrayMock))).toEqual({
        currentExchange: defaultExchangeMock,
        currentExchangeName: 'Binance',
        currentPairsFiltered: pairsMock
      });
    });
  
    it('should return the empty exchange detail', () => {
      const previousState = {
        currentExchange: {},
      } as IExchangeSelector;
      expect(exchangeReducer(previousState, getExchangeDetail({}))).toEqual({
        currentExchange: {
          data: undefined,
          pairs: undefined,
        },
        currentPairsFiltered: undefined
      });
    });
  });

  describe('setCurrentExchange', () => {
    it('should return the specific exchange name', () => {
      const previousState = {} as IExchangeSelector;
      expect(exchangeReducer(previousState, setCurrentExchange('Test name'))).toEqual({
        currentExchangeName: 'Test name',
      });
    });
  
    it('should return the empty exchange name', () => {
      const previousState = {} as IExchangeSelector;
      expect(exchangeReducer(previousState, setCurrentExchange(''))).toEqual({
        currentExchangeName: '',
      });
    });
  });

  describe('setFilterExchange', () => {
    it('should return the specific exchange filter', () => {
      const previousState = {
        currentPairsFiltered: pairsMock,
        currentExchange: defaultExchangeMock,
      } as unknown as IExchangeSelector;
      expect(exchangeReducer(previousState, setFilterExchange('USDT'))).toEqual({
        currentExchange: defaultExchangeMock,
        currentPairsFiltered: [pairsMock[0]],
      });
    });
  
    it('should return full pairs when the filter is empty', () => {
      const previousState = {
        currentPairsFiltered: pairsMock,
        currentExchange: defaultExchangeMock,
      } as unknown as IExchangeSelector;
      expect(exchangeReducer(previousState, setFilterExchange(''))).toEqual({
        currentExchange: defaultExchangeMock,
        currentPairsFiltered: pairsMock,
      });
    });
  });
});
