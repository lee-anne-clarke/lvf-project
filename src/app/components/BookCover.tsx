import React from "react";
import Image from "next/image";


export default function BookCover(props) {
	return (
    <Image
        className="book-cover" 
        width={props.imgWidth}
        height={props.imgHeight}
				src={`https://covers.openlibrary.org/b/id/${props.coverId}-L.jpg`} 
				alt={`${props.bookTitle} cover`} 
        priority
      />
  );
}