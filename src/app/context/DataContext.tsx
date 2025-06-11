"use client";

import { createContext, useState, useEffect, PropsWithChildren } from "react";

interface DataContextProps {
  data: [] | null,
  isLoading: boolean,
  errorMsg: unknown
}

// Set the context properties & initial values
export const DataContext = createContext<DataContextProps>({
  data: null,
  isLoading: true,
  errorMsg: null
});

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const fetchUrl = "https://openlibrary.org/subjects/interior_design.json";
    const config = {
      format: "json",
      details: false,
      limit: 12
    }

    // Fetch the book list data
    const fetchData = async (url:string, config:object) => {
      try {
        const response = await fetch(fetchUrl, config);

        if (!response.ok) {
          throw new Error(`Request failed. Status code: ${response.status}`);
        }

        const result = await response.json();

        /* 
          In the returned data list, the `key` property is a string that contains the book id (format: `/works/OL3343`). For better readability, create a new property called `id` that just contains the book id.
        */
        const modifiedList = result.works.map((item: { key:string }) => {
          const str = item.key;
          const newStr = str.lastIndexOf("/");
          const id = str.substring(newStr + 1);

          return { ...item, id };
        })

        setData(modifiedList);

      } catch (error) {
        setErrorMsg((error as Error).message);

      } finally {
        setIsLoading(false);
      }
    };

   fetchData(fetchUrl, config);
  }, []);


  return (
    <DataContext value={{ data, isLoading, errorMsg }}>
      {children}
    </DataContext>
  );
}

