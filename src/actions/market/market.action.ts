import { createSlice } from '@reduxjs/toolkit';

import { IMarketSelector } from '../../components/Markets/IMarket';

const initialState = {
  markets: [],
  marketsFiltered: [],
  currentCryptoId: 0,
  currentCryptoName: '',
} as unknown as IMarketSelector;

/**
 * Create slice with the custom market reducers
 */
export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    getMarketsByCrypto: (state, action) => {
      state.markets = action.payload;
      state.marketsFiltered = action.payload;
    },
    setCurrentCrypto: (state, action) => {
      state.currentCryptoId = action.payload.currentId;
      state.currentCryptoName = action.payload.name;
    },
    setFilterMarket: (state, action) => {
      const searchFilter = new RegExp(action.payload, 'i');
      state.marketsFiltered = state.markets.filter((m) => (
        searchFilter.test(m.name)
        || searchFilter.test(m.base)
        || searchFilter.test(m.quote)
      ));
    },
  }
});

export const { getMarketsByCrypto, setCurrentCrypto, setFilterMarket } = marketSlice.actions;
export default marketSlice.reducer;
