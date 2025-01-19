import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Popup from "@/components/Popup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Forum.io",
  description: "A modern chat platform designed for seamless and intuitive communication, bringing people closer together.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <head>
			<link rel='icon' href='/logo.png' />
		  </head>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
        >
         
         <ClerkLoading>
            <div className="flex items-center justify-center h-screen text-2xl">
              LOADING...
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <div className=" ">
              <div className="flex flex-col h-screen ">
                <ScrollToTop/>
                <Navbar />
                {children}
                <Popup/>
                <Footer/>
              </div>
            </div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
