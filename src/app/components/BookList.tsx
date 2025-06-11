import React, { useContext } from "react";
import Link from "next/link"

import { DataContext } from "../context/DataContext";
import BookCover from "./BookCover";


export default function BookList() {
  // Access the context that contains the fetch data
  const { data, isLoading, errorMsg } = useContext(DataContext);

  console.log('data:', data)

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMsg) {
    return <p>Sorry, an error has occurred. Please try again.</p>;
  }

  if (!data) {
    return <p>Sorry, no data available.</p>;
  }

  interface BookItemObject {
    [key: string]: string;
  }

  return (
    <main>
      <div className="grid grid--home">

        {data.map((item: BookItemObject) => (
          <div className="grid__item grid__item--home" key={item.key}>
            <div className="grid__item-inner">

              <div className="cover-wrap cover-wrap--home">
                <Link className="img-link" href={`detail/${item.id}`}>
                  <BookCover 
                    coverId={item.cover_id} 
                    bookTitle={item.title} 
                    imgWidth={180}
                    imgHeight={280}
                  />
                </Link>
              </div>

              <div className="title-wrap">
                <Link className="text-link" href={`detail/${item.id}`}>
                  {item.title} ({item.first_publish_year})
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>

      <footer className="footer">
        <p>API sources:</p> 
        <p>
          <Link className="text-link" href="https://openlibrary.org/developers/api" target="_blank">Open Library APIs</Link>
        </p>
      </footer>
    </main>
  );
}


