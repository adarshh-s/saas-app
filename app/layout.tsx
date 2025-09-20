import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
        <ClerkProvider appearance={{variables:{colorPrimary:'#fe5933'}}}>
          {/*<header className="p-4 border-b flex gap-2 items-center justify-end">*/}
          {/*  <SignedOut>*/}
          {/*    <SignInButton />*/}
          {/*    <SignUpButton />*/}
          {/*  </SignedOut>*/}
          {/*  <SignedIn>*/}
          {/*    <UserButton />*/}
          {/*  </SignedIn>*/}
          {/*</header>*/}
          <Navbar />
          {children}
         </ClerkProvider>
        </body>
      </html>
  );
}
