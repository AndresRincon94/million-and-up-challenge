import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';

import exchangeReducer from '../actions/exchange/exchange.action';
import cryptoReducer from '../actions/crypto/crypto.action';

const rootReducer = combineReducers({
  getExchanges: exchangeReducer,
  getCryptos: cryptoReducer,
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
