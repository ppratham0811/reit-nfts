import { createContext, useContext } from "react";

interface IWalletContext {
  walletAddress: string;
  setWalletAddress: (walletAddress: string) => void;
}

export const WalletContext = createContext<IWalletContext>({
  walletAddress: "",
  setWalletAddress(walletAddress) {},
});

export const useWalletContext = () => useContext(WalletContext);
