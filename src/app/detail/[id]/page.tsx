"use client";

import React, { use, useContext, useEffect } from "react";
import Link from "next/link"
import Image from "next/image";

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

  // Retrieve the book that matches the params id
  const item = data.find(obj => obj.id === bookId)

  return (
    <div>
      <h2>{item.title}</h2>
      
      <div className="grid">
        <div className="grid__item">
          <BookCover 
            coverId={item.cover_id} 
            bookTitle={item.title} 
            imgWidth={300}
            imgHeight={500}
          />
        </div>
      </div>


      <footer className="footer">
        <Link className="text-link" href="/">Return home</Link>
      </footer>

    </div>
  );
}