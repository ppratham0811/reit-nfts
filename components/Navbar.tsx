"use client";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { WalletContext, useWalletContext } from "@/lib/context/WalletContext";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

function Navbar() {
  // const etherProviders = new ethers.BrowserProvider(window.ethereum);
  const { walletAddress, setWalletAddress } = useWalletContext();

  useEffect(() => {
    const connectedWallet = localStorage.getItem("walletAddress") || "";
    setWalletAddress(connectedWallet);
    console.log(walletAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletAddress]);

  // const getAllAccounts = async () => {
  //   const res = await window.ethereum.request({ method: "eth_accounts" });
  //   return res;
  // };

  const connectWallet = async () => {
    // const allConnectedAccounts = await getAllAccounts();
    if (!walletAddress) {
      await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          if (Array.isArray(accounts) && accounts.length > 0) {
            setWalletAddress(accounts[0]);
            localStorage.setItem("walletAddress", accounts[0]);
          }
        });
    }
  };

  return (
    <div className="w-full text-white">
      <nav className="relative py-4 px-8 flex flex-wrap items-center justify-between mx-auto lg:justify-between">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <a href="/">
            <span className="overflow-hidden box-border inline-block opacity-100 relative max-w-[100%]">
              <span className="box-border block max-w-[100%]">NFT-REN</span>
            </span>
          </a>
        </div>
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
            <div>
              <a
                className=" rounded-md text-sm font-medium outline-none hover:text-cyan-500 focus:text-cyan-500 transition-all focus:bg-primary-dark focus:outline-none inline-block px-6 py-2"
                href="/create"
              >
                Create
              </a>
            </div>
            <div>
              <a
                className="rounded-md text-sm font-medium outline-none hover:text-cyan-500 focus:text-cyan-500 transition-all focus:bg-primary-dark focus:outline-none inline-block px-6 py-2"
                href="/listings"
              >
                Listing
              </a>
            </div>
            <div>
              <a
                className="rounded-md text-sm font-medium outline-none hover:text-cyan-500 focus:text-cyan-500 transition-all focus:bg-primary-dark focus:outline-none inline-block px-6 py-2"
                href="/about"
              >
                About
              </a>
            </div>
            <div className="ml-5">
              {walletAddress ? (
                <span className="px-5 py-2 text-sm font-medium rounded-full text-cyan-600 bg-cyan-100">
                  {walletAddress}
                </span>
              ) : (
                <Button
                  onClick={connectWallet}
                  className="px-5 py-2 text-sm font-medium bg-white rounded-full text-cyan-600"
                >
                  Connect Wallet
                </Button>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
