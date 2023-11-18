import { configureStore } from '@reduxjs/toolkit';
import exchangeReducer from '../actions/exchange.action';

const store = configureStore({
  reducer: {
    getExchanges: exchangeReducer,
  },
});

export default store;
