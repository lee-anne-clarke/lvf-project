"use client";

import React, { use, useContext } from "react";
import Link from "next/link"

import { DataContext } from "../../context/DataContext";
import BookCover from "../../components/BookCover";


export default function BookDetail({ params }) {
  // Context that contains the fetch data
  const { data, isLoading, hasError } = useContext(DataContext);

  // Book id
  const { id } = use(params);
  const bookId = {id}.id;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error: {hasError.message}</p>;
  }

  if (!data) {
    return <p>Sorry, no data available.</p>;
  }

  // Retrieve the book from the data list
  const item = data.find(obj => obj.id === bookId)
  console.log('item:', item)

  // Remove duplicate author names
  function removeDuplicates(arr, prop) {
    return arr.filter((obj, index, self) =>
      index === self.findIndex(o => o[prop] === obj[prop])
    );
  }

  const authorsArray = removeDuplicates(item.authors, 'name');


  return (
    <div>
      <h2>{item.title}</h2>
      
      <div className="grid grid--detail">
        <div className="grid__item">
          <div className="text-center">
            <BookCover 
              coverId={item.cover_id} 
              bookTitle={item.title} 
              imgWidth={330}
              imgHeight={500}
            />
          </div>
        </div>

        <div className="grid__item">
          <ul>
            <li>
              <b>Original Publication Date:</b> {item.first_publish_year}
            </li>

            <li>
              <b>Author(s):</b> 
              <ul>
                {authorsArray.map((author) => (
                  <li key={author.key}>{author.name}</li>
                ))}
              </ul>
            </li>

            <li>
              <b>Number of Editions:</b> {item.edition_count}
            </li>

          </ul>
        </div>
      </div>


      <footer className="footer">
        <Link className="text-link" href="/">Return home</Link>
      </footer>

    </div>
  );
}