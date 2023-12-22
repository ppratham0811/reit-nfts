import { createSlice } from "@reduxjs/toolkit";

export interface Wallet {
  address_: string;
}

const initialState: Wallet = {
  address_: "",
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallet: (_, action) => {
      return {
        address_: action.payload,
      };
    },
    removeWallet: () => {
      return {
        address_: "",
      };
    },
  },
});

export const { setWallet, removeWallet } = walletSlice.actions;

export default walletSlice.reducer;
