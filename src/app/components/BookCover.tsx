import React from "react";
import Image from "next/image";


interface BookCoverProps {
  imgWidth: number,
  imgHeight: number,
  coverId: string,
  bookTitle: string
}

export default function BookCover({imgWidth, imgHeight, coverId, bookTitle}: BookCoverProps) {
	return (
    <Image
        className="book-cover" 
        width={imgWidth}
        height={imgHeight}
        src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`} 
        alt={`${bookTitle} cover`} 
        priority
      />
  );
}