import { createSlice } from '@reduxjs/toolkit';

import { ICryptoSelector } from '../../components/Cryptos/ICrypto';

const initialState = {
  cryptos: [],
  info: {}
} as unknown as ICryptoSelector;

/**
 * Create slice with the custom crypto reducers
 */
export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    getCryptos: (state, action) => {
      state.cryptos = action.payload?.[0];
      state.info = action.payload?.[1];
    },
  }
});

export const { getCryptos } = cryptoSlice.actions;
export default cryptoSlice.reducer;
