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
    "GreenFlames Media specializes in dynamic media coverage and captivating animations. Elevate your story with our innovative visual storytelling solutions. Connect with us for engaging narratives that leave a lasting impact.",
  keywords: [
    "Media coverage",
    "Animation studio",
    "Visual storytelling",
    "Creative media solutions",
    "Video production",
    "Storytelling agency",
    "Motion graphics",
    "Digital storytelling",
    "Visual narratives",
    "Media services",
    "Brand storytelling",
    "Animated content",
    "Media production company",
    "Creative video",
    "Visual communication",
  ],
  creator: "KunJon",
  metadataBase: new URL("https://greenflames.vercel.app/"),
  openGraph: {
    title:
      "GreenFlames | Elevate Your Story with Captivating Media & Dynamic Animation",
    description:
      "GreenFlames Media specializes in dynamic media coverage and captivating animations. Elevate your story with our innovative visual storytelling solutions. Connect with us for engaging narratives that leave a lasting impact.",
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
