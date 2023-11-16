import { Poppins } from "next/font/google";
import { Metadata } from "next";

import Navbar from "./_components/common/navbar";
import Footer from "./_components/common/footer";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "GreenFlames | Elevate Your Story with Captivating Media & Dynamic Animation",
  description:
    "GreenFlames | Elevate Your Story with Captivating Media & Dynamic Animation",
  keywords: [
    "BabyBlackRock (BBR)",
    "Crypto Token",
    "Meme Coin",
    "Cryptocurrency",
    "Bitcoin ETF",
    "Community",
    "Binance Smart Chain (BSC)",
    "PancakeSwap",
    "Buy BBR",
    "Crypto Investment",
    "Blockchain",
    "Cryptocurrency News",
    "Crypto Community",
    "Cryptocurrency Exchange",
    "Secure Wallet",
    "Decentralized Finance (DeFi)",
    "Crypto Roadmap",
    "NFTs",
    "Bullish Crypto",
    "Tokenomics",
  ],
  creator: "KunJon",
  metadataBase: new URL("https://greenflames.vercel.app/"),
  openGraph: {
    title:
      "GreenFlames | Elevate Your Story with Captivating Media & Dynamic Animation",
    description:
      "GreenFlames | Elevate Your Story with Captivating Media & Dynamic Animation",
    url: "https://greenflames.vercel.app/",
    siteName: "GreenFlames",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
