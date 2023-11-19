import { configureStore } from '@reduxjs/toolkit';
import exchangeReducer from '../actions/exchange.action';
import cryptoReducer from '../actions/crypto.action';

const store = configureStore({
  reducer: {
    getExchanges: exchangeReducer,
    getCryptos: cryptoReducer,
  },
});

export default store;
