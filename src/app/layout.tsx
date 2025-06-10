import type { Metadata } from "next";
import "../styles/global.scss";

// Context that contains the fetch data
import { DataProvider } from "./context/DataContext";

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
      <body>

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
