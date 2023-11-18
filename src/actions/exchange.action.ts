import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exchanges: []
}

export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    getExchanges: (state, action) => {
      state.exchanges = action.payload;
    },
  }
});

export const { getExchanges } = exchangeSlice.actions;
export default exchangeSlice.reducer;
