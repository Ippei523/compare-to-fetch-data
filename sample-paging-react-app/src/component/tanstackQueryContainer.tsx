import { useQuery } from "@tanstack/react-query";
import { TodoType } from "../interface";
import { useState } from "react";

export function TanstackQueryContainer() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useQuery({
    queryKey: ["example", page],
    queryFn: async (): Promise<TodoType> => {
      const response = await fetch(`http://localhost:3100/item/${page}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data?.id}</h1>
      <p>{data?.title}</p>

      {/* ページネーション */}
      <button
        onClick={() => {
          setPage(page - 1);
          console.log("Page: ", page);
          console.log("data?.id: ", data?.id);
          console.log("data?.title: ", data?.title);
        }}
        disabled={page === 1}
      >
        Previous
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === data?.pageLimit}
      >
        Next
      </button>
    </div>
  );
}
