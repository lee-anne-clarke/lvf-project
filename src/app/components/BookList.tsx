import React, { useContext } from "react";
import Link from "next/link"
import Image from "next/image";

import { DataContext } from "../context/DataContext";
import BookCover from "./BookCover";


export default function BookList() {
  // Context that contains the fetch data
  const { data, isLoading, hasError } = useContext(DataContext);

  console.log('data:', data)

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error: {hasError.message}</p>;
  }

  if (!data) {
    return <p>Sorry, no data available.</p>;
  }

  return (
    <div className="grid grid--home">

      {data.map((item) => (
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
  );
}


