import React, { useState, useEffect } from "react";
import Link from "next/link"
import BookCover from "./BookCover"
import Image from "next/image";

export default function BookList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = {
    format: "json",
    details: false,
    limit: 12
  }

  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await fetch("https://openlibrary.org/subjects/interior_design.json", { params });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    const data = await response.json();
      setItems(data.works);
      console.log("data:", data);

    } catch (err) {
      setError(err);

    } finally {
      setLoading(false);
    }
  };

  fetchData();
  }, []);

if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error: {error.message}</p>;
}

return (
    <div className="grid">
 
      {items.map((item) => (
        <div className="grid__item" key={item.key}>
          <div className="grid__item-inner">

            <div className="cover-wrap cover-wrap--home">
              <Link className="img-link" href={item.key}>
                <BookCover 
                  coverId={item.cover_id} 
                  bookTitle={item.title} 
                />
              </Link>
            </div>

            <div className="title-wrap">
              <Link className="text-link" href={item.key}>
                {item.title} ({item.first_publish_year})
              </Link>
            </div>

          </div>
        </div>
      ))}
   
    </div>
  );
}


