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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <DidContextProvider>
          <WalletContextProvider>
            <div>{children}</div>
          </WalletContextProvider>
        </DidContextProvider>
      </body>
    </html>
  );
}
