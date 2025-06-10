"use client";

import { createContext, useState, useEffect } from "react";

const config = {
  format: "json",
  details: false,
  limit: 12
}

export const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    // Fetch the book list data
    const fetchData = async () => {
      try {
        const response = await fetch("https://openlibrary.org/subjects/interior_design.json", { config });

        if (!response.ok) {
          throw new Error(`Request failed. Status code: ${response.status}`);
        }

        const result = await response.json();

        /* 
          In the returned data list, the `key` property is a string that contains the book id (format: `/works/OL3343`). For better readability, create a new property that just contains the book id.
        */
        const modifiedList = result.works.map(item => {
          const str = item.key;
          const newStr = str.lastIndexOf("/");
          const id = str.substring(newStr + 1);

          return { ...item, id };
        })

        setData(modifiedList);

      } catch (error) {
        setHasError(error);

      } finally {
        setIsLoading(false);
      }
    };

   fetchData();
  }, []);


  return (
    <DataContext value={{ data, isLoading, hasError }}>
      {children}
    </DataContext>
  );
}

