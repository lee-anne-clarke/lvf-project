import React from "react";

const fetchParams = {
  format: "json",
  details: false,
  limit: 12
}

export async function generateStaticParams() {
  const response = await fetch("https://openlibrary.org/subjects/interior_design.json", {fetchParams});
  const data = await response.json();
  return data.works.map((item) => ({ 
    id: item.key
  }));
}

export default function BookDetail({ params }) {
  return <div>Book ID: {params.key}</div>;
}


