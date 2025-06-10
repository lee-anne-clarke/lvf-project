import React from "react";
import Link from "next/link"
import BookCover from "./BookCover";


export default async function BookDetail({ params }: { params: { id: string } }) {
  const { id } = await params;

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