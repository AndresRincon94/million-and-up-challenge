import { createSlice } from '@reduxjs/toolkit';

import IExchange, { IExchangeSelector } from '../../components/Exchanges/IExchange';

const initialState = {
  currentExchange: {},
  currentPairsFiltered: [],
  currentExchangeId: 5,
  currentExchangeName: '',
} as unknown as IExchangeSelector;

/**
 * Create slice with the custom exchange reducers
 */
export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    getExchange: (state, action) => {
      const exchanges = action.payload as IExchange[];
      state.currentExchangeId = exchanges.find((ex) => (ex.name === state.currentExchangeName))?.id || 0;
    },
    getExchangeDetail: (state, action) => {
      state.currentExchange.data = action.payload[0];
      state.currentExchange.pairs = action.payload[1];
      state.currentPairsFiltered = action.payload[1];
    },
    setCurrentExchange: (state, action) => {
      state.currentExchangeName = action.payload;
    },
    setFilterExchange: (state, action) => {
      const searchFilter = new RegExp(action.payload, 'i');
      state.currentPairsFiltered = state.currentExchange.pairs.filter((p) => (
        searchFilter.test(p.base)
        || searchFilter.test(p.quote)
      ));
    }
  }
});

export const {
  getExchange, setCurrentExchange, getExchangeDetail, setFilterExchange,
} = exchangeSlice.actions;
export default exchangeSlice.reducer;
