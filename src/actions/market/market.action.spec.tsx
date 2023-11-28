import defaultMarketsMock, { marketsMock } from '../../__mocks__/market.mock';
import { IMarketSelector } from '../../components/Markets/IMarket';

import marketReducer, { getMarketsByCrypto, setCurrentCrypto, setFilterMarket } from './market.action';

describe('MarketAction', () => {
  it('should return the initial state', () => {
    expect(marketReducer(undefined, { type: undefined })).toEqual({
      markets: [],
      marketsFiltered: [],
      currentCryptoId: 0,
      currentCryptoName: '',
    });
  });

  describe('getMarketsByCrypto', () => {
    it('should return the specific market', () => {
      const previousState = {} as IMarketSelector;
      expect(marketReducer(previousState, getMarketsByCrypto(marketsMock))).toEqual(defaultMarketsMock);
    });
  
    it('should return the empty market', () => {
      const previousState = {} as IMarketSelector;
      expect(marketReducer(previousState, getMarketsByCrypto([]))).toEqual({
        markets: [],
        marketsFiltered: [],
      });
    });
  });

  describe('setCurrentCrypto', () => {
    it('should return the specific market name', () => {
      const previousState = {} as IMarketSelector;
      expect(marketReducer(previousState, setCurrentCrypto({
        currentId: 10,
        name: 'Test name'
      }))).toEqual({
        currentCryptoId: 10,
        currentCryptoName: 'Test name',
      });
    });
  
    it('should return the empty market name', () => {
      const previousState = {} as IMarketSelector;
      expect(marketReducer(previousState, setCurrentCrypto({}))).toEqual({ 
        currentCryptoId: undefined,
        currentCryptoName: undefined,
      });
    });
  });

  describe('setFilterMarket', () => {
    it('should return the specific market filter', () => {
      const previousState = {
        markets: marketsMock
      } as unknown as IMarketSelector;
      expect(marketReducer(previousState, setFilterMarket('bit'))).toEqual({
        markets: marketsMock,
        marketsFiltered:[ marketsMock[0]],
      });
    });
  
    it('should return full markets when the filter is empty', () => {
      const previousState = {
        markets: marketsMock
      } as unknown as IMarketSelector;
      expect(marketReducer(previousState, setFilterMarket(''))).toEqual({
        markets: marketsMock,
        marketsFiltered: marketsMock,
      });
    });
  });
});
