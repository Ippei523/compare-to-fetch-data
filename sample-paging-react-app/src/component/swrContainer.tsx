import useSWR from "swr";
import { TodoType } from "../interface";
import { useState } from "react";

export function SwrContainer() {
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(
    `http://localhost:3100/item/${page}`,
    async (url: string): Promise<TodoType> => {
      const response = await fetch(url).then((res) => res.json());
      return response;
    }
  );

  if (error)
    return (
      <div>
        <p>failed to load</p>
        <button
          onClick={() => {
            window.history.back();
          }}
        >
          戻る
        </button>
      </div>
    );
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>{data?.id}</h1>
      <p>{data?.title}</p>

      {/* ページネーション */}
      <button
        onClick={() => {
          setPage(page - 1);
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
