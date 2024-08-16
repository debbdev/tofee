import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-spaceGrotesk",
// });

export const metadata: Metadata = {
  title: "FeeTrx Energy",
  description: "Buy Your Trx Energy",
  icons: {
    icon: "assets/icons/coin.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${inter.variable} ${spaceGrotesk.variable}`}> */}
      <body className={`${inter.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover: text-primary-500",
            },
          }}
        >
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          {children}
        </ClerkProvider>
        <Toaster />
      </body>
    </html>
  );
}
