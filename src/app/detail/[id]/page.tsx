import React, { useContext, use } from "react";
import Link from "next/link"
import { DataContext } from '../../context/DataContext';
import BookCover from "./BookCover";


export default function BookDetail({ params }) {
  const { id } = use(params)

  const { data, isLoading, hasError } = useContext(DataContext);

  return (
    <div>
      <h2>Book ID: {id}</h2>
      {/* Use the ID to fetch data here */}



      <br /><br /><br /><br />
      <div>
        <Link className="text-link" href="/">Return home</Link>
      </div>

    </div>
  );
}