"use client";
import { ReactNode, useState } from "react";
import { WalletContext } from "./WalletContext";

export function WalletContextProvider({ children }: { children: ReactNode }) {
  const [wallet, setWallet] = useState(() => {
    return localStorage.getItem("walletAddress") || "";
  });

  const setWalletAddress = (walletAddress: string) => {
    setWallet(walletAddress);
  };

  return (
    <WalletContext.Provider value={{ walletAddress: wallet, setWalletAddress }}>
      {children}
    </WalletContext.Provider>
  );
}
