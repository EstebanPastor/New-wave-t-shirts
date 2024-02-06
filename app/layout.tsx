import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/ui/navbar/NavBar";
import { Raleway } from "next/font/google";
import AuthContext from "@/context/AuthContext";
import getCurrentUser from "./(auth)/actions/getCurrentUserSession";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body className={raleway.className}>
        <AuthContext>
          <NavBar user={user!}/>
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
