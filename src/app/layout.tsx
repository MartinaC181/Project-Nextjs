import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { interFont }  from "@/config/fonts";
import { TopMenu } from "@/components";
import HomeButton from "@/components/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tienda",
  description: "Tienda virtual de instrumentos musicales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className= "bg-slate-500 text-white font-sans antialiased flex min-h-screen flex-col justify-between items-center w-full"
        > 
        <div className="flex flex-col items-center justify-start w-full">
            <Navbar />
            { children }
        </div>
      
        <Footer />
      </body>
    </html>
  );
}
