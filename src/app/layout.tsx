import type { Metadata } from "next";
import "../styles/global.scss";

// Context provider that makes the fetch data available to the application
import { DataProvider } from "./context/DataContext";

// Metadata
export const metadata: Metadata = {
  title: "Books About Interior Design - Livefront Project"
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

            <header>
              <h1 className="h1">Books About Interior Design</h1>
              <hr className="hr" />
            </header>
            
            {children}

          </div>
        </DataProvider>
        
      </body>
    </html>
  );
}
