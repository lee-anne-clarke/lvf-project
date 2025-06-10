import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DataProvider } from './context/DataContext';
import "../styles/global.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Livefront Project",
  description: "",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <DataProvider>
          <div className="container">

            <h1>Books About Interior Design</h1>
            <hr />
            {children}

          </div>
        </DataProvider>
        
      </body>
    </html>
  );
}
