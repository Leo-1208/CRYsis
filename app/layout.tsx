import { AuthContextProvider } from "@/context/AuthContext";
import { ThemeContextProvider } from "@/context/ThemeContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CoinContextProvider } from "@/context/CoinContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRYsis",
  description: "Created by @Shreyash",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          <CoinContextProvider>
            <ThemeContextProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeContextProvider>
          </CoinContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
