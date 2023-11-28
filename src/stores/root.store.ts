import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';

import exchangeReducer from '../actions/exchange/exchange.action';
import cryptoReducer from '../actions/crypto/crypto.action';
import marketReducer from '../actions/market/market.action';

const rootReducer = combineReducers({
  getExchange: exchangeReducer,
  getExchangeDetail: exchangeReducer,
  setCurrentExchange: exchangeReducer,
  setFilterExchange: exchangeReducer,
  getCryptos: cryptoReducer,
  getMarketsByCrypto: marketReducer,
  setCurrentCrypto: marketReducer,
  setFilterMarket: marketReducer,
});

/**
 * Configure the provider store
 *
 * @param preloadedState - Provider state preloaded
 */
const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export default setupStore;
