import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const inter = Kanit({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "TRXVL",
  description: "A next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden antialiased`}>
        <div className="absolute -z-[10] w-screen">
          <img src="/bg.jpg" alt="Hero" className="bg-white opacity-75" />
          {/* <div className="bottom-0 left-0 right-0 z-[10] h-40 w-screen bg-gradient-to-t from-white to-transparent" /> */}
        </div>
        {children}
      </body>
    </html>
  );
}
