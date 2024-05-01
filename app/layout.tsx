import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WalletContextProvider } from "@/lib/context/WalletContextProvider";
import { DidContextProvider } from "@/lib/context/DidContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invest in REITs using NFTs",
  description: "Investing in REITs made easy by NFTs",
};

// import { WagmiConfig, createConfig } from "wagmi";
// import {
//   ConnectKitProvider,
//   ConnectKitButton,
//   getDefaultConfig,
// } from "connectkit";

// const config = createConfig(
//   getDefaultConfig({
//     // Required API Keys
//     alchemyId: process.env.ALCHEMY_ID!, // or infuraId
//     walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID!,

//     // Required
//     appName: "Real Estate NFTs",

//     // Optional
//     appDescription: "Your App Description",
//     appUrl: "https://family.co", // your app's url
//     appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
//   })
// );

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* <WagmiConfig config={config}> */}
        {/* <ConnectKitProvider> */}
        <DidContextProvider>
          <WalletContextProvider>
            <div>{children}</div>
          </WalletContextProvider>
        </DidContextProvider>
        {/* </ConnectKitProvider> */}
        {/* </WagmiConfig> */}
      </body>
    </html>
  );
}
