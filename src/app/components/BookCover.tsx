import React from "react";
import Image from "next/image";


export default function BookCover({coverId, bookTitle}) {
	return (
    <Image
        className="book-cover" 
        width={180}
        height={280}
				src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`} 
				alt={`${bookTitle} cover`} 
        priority
      />
  );
}