import useSWR from "swr";
import { TodoType } from "../interface";

export function SwrContainer() {
  const { data, error } = useSWR(
    "http://localhost:3100/item/1",
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
      <h1>SWR</h1>
      <p>{data?.id}</p>
      <p>{data?.title}</p>
    </div>
  );
}
