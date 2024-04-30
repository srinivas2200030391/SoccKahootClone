import React, { Suspense, lazy, useEffect, useState } from "react";
import axios from "axios";
const Loading = lazy(() => import("./Loading"));

export default function Main() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data ? (
        <div>
          {data.map((data, index) => (
            <h3>{data.id}</h3>
          ))}
        </div>
      ) : (
        <Suspense fallback={<div>Error Loading....</div>}></Suspense>
      )}
    </div>
  );
}
