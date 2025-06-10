import React, { useState, useEffect } from "react";

export default function BookListData() {
  const [items, setItems] = useState([]);
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

}