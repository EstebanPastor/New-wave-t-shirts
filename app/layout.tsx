import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar/NavBar";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "New wave t-shirts",
  description: "T-shirt store ",
  keywords:
    "t-shirt, store, fashion, clothing, apparel, shirt, tee, top, style, buy, shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
