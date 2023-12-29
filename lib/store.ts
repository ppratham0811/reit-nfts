import { configureStore, combineReducers } from "@reduxjs/toolkit";
import walletReducer from "@/lib/features/walletSlice";

export const rootReducer = combineReducers({
  wallet: walletReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
