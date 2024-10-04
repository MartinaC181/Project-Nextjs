import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { interFont }  from "@/config/fonts";
import { TopMenu } from "@/components";

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
        className= {interFont.className}
        > 
        
        { children }
      </body>
    </html>
  );
}
