"use client";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { WalletContext, useWalletContext } from "@/lib/context/WalletContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

function Navbar() {
  const [menu, setMenu] = useState(false);

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
    <div className="text-white">
      {menu && (
        <main className="h-screen absolute py-4 px-8 right-0 z-[999] bg-secondary md:w-[30%] lg:hidden">
          <div
            onClick={() => setMenu(false)}
            className="absolute top-2 right-8 hover:cursor-pointer"
          >
            <CloseIcon />
          </div>
          <div className="text-white flex flex-col mt-16 w-[30%] min-w-[150px] justify-center items-left">
            <Button className="rounded-full py-2 px-4 my-2">
              <a href="/create">Create</a>
            </Button>
            <Button className="rounded-full py-2 px-4 my-2">
              <a href="/listings">Explore</a>
            </Button>
            <Button className="rounded-full py-2 px-4 my-2">
              <a href="/about">About</a>
            </Button>
            <Button
              onClick={connectWallet}
              className="px-5 py-2 text-sm mt-6 font-medium bg-white rounded-full text-cyan-600"
            >
              Connect Wallet
            </Button>
          </div>
        </main>
      )}
      <nav className="w-full relative py-4 px-8 flex items-center justify-between mx-auto lg:justify-between">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <a href="/">
            <span className="overflow-hidden box-border inline-block opacity-100 relative max-w-[100%]">
              <span className="box-border block max-w-[100%]">
                Real Estate Tokenization
              </span>
            </span>
          </a>
        </div>
        <div className="lg:hidden z-100">
          <MenuIcon
            onClick={() => setMenu(true)}
            className="hover:cursor-pointer"
          />
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
                Explore Listings
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
