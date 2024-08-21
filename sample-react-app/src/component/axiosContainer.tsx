import axios from "axios";
import { useEffect, useState } from "react";
import { TodoType } from "../interface";

export function AxiosContainer() {
  const [data, setData] = useState<TodoType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todo/1")
      .then((response) => {
        setData(response.data as TodoType);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{data?.id}</h1>
          <p>{data?.title}</p>
        </div>
      )}
    </div>
  );
}
