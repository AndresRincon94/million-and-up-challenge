import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptos: [],
  info: {}
}

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
