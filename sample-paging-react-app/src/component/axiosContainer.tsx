import axios from "axios";
import { useEffect, useState } from "react";
import { TodoType } from "../interface";

export function AxiosContainer() {
  const [data, setData] = useState<TodoType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3100/item/" + page)
      .then((response) => {
        setData(response.data as TodoType);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        console.log("GET /item/" + page + " done");
      });
  }, [page]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
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
            1ページ戻る
          </button>
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={page === data?.pageLimit}
          >
            次のページへ
          </button>
        </div>
      )}
    </div>
  );
}
