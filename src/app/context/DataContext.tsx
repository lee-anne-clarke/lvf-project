"use client";

import { createContext, useState, useEffect } from "react";

const config = {
  format: "json",
  details: false,
  limit: 12
}

// Create a context so that data can be used in multiple files
export const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://openlibrary.org/subjects/interior_design.json", { config });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();

        const modifiedList = result.works.map(item => {
          let str = item.key;
          let newString = str.lastIndexOf("/");
          let id = str.substring(newString + 1);

          return { ...item, id };
        })

        setData(modifiedList);

      } catch (error) {
        setError(error);

      } finally {
        setLoading(false);
      }
    };

   fetchData();
  }, []);


  return (
    <DataContext value={{ data, isLoading, error }}>
      {children}
    </DataContext>
  );
}

