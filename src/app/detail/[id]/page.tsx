"use client";

import React, { useContext } from "react";
import { useParams } from "next/navigation";
import Link from "next/link"

import { DataContext } from "../../context/DataContext";
import BookCover from "../../components/BookCover";


export default function BookDetail() {
  // Access the context that contains the fetch data
  const { data, isLoading, errorMsg } = useContext(DataContext);

  // Extract the `params` object containing the book id
  const params = useParams<{ id: string; }>();
  const bookId = params.id;


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMsg) {
    return <p>Sorry, an error has occurred. Please try again.</p>;
  }

  if (!data) {
    return <p>Sorry, no data available.</p>;
  } 

  // Retrieve the specified book from the data list

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const item:any = data.find((obj: { id: string; }) => obj.id === bookId)

  // Remove duplicate author names
  function removeDuplicates(arr:[], prop:string) {
    return arr.filter((obj, index, self) =>
      index === self.findIndex(o => o[prop] === obj[prop])
    );
  }

  const authorsArray = removeDuplicates(item.authors, "name");

  return (
    <article>
      <h2 className="h2">{item.title}</h2>
      
      <div className="grid grid--detail">
        <div className="grid__item">
          <div className="cover-wrap--detail">
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
                {authorsArray.map((author: { key:string, name:string }) => (
                  <li key={author.key} className="list-item-lvl2">{author.name}</li>
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

    </article>
  );
}