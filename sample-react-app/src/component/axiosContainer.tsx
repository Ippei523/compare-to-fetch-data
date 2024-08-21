import axios from "axios";
import { useEffect, useState } from "react";
import { TodoType } from "../interface";

export function AxiosContainer() {
  const [data, setData] = useState<TodoType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      axios.get("http://localhost:3100/item/1").then((response) => {
        setData(response.data as TodoType);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }, []);

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

          <button
            onClick={() => {
              window.history.back();
            }}
          >
            戻る
          </button>
        </div>
      )}
    </div>
  );
}
