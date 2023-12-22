"use client";
import { ethers } from "ethers";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { removeWallet, setWallet, Wallet } from "@/lib/features/walletSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";

function Login() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const wallet = useAppSelector((state) => state.wallet.address_);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const getWalletLogin = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const walletAddress_ = await signer.getAddress();
    if (signer) {
      setConnected(true);
      setWalletAddress(walletAddress_);
      dispatch(setWallet(walletAddress_));

      setTimeout(() => {
        router.push("/");
      }, 5000);
    } else {
      setConnected(false);
      setWalletAddress("");
      dispatch(removeWallet());
    }
  };

  return (
    <div>
      <div className="z-100">
        <div className="flex items-center justify-center pt-12 text-center">
          <h1 className="text-4xl font-bold">
            Investing in REITs made easy using NFTs
          </h1>
        </div>
        <div className="flex items-center justify-center text-lg pt-4">
          <p>To get started, connect your wallet</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <button
          onClick={getWalletLogin}
          className="text-lg bg-blue-500 text-white p-4 rounded-lg"
        >
          {connected && wallet ? "Connected" : "Connect your wallet"}
        </button>

        {walletAddress.length > 0 && (
          <h3 className="text-xl mt-4">Address {wallet}</h3>
        )}
      </div>
    </div>
  );
}

export default Login;
