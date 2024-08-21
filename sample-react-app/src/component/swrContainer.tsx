import useSWR from "swr";
import { TodoType } from "../interface";

export function SwrContainer() {
  const fetcher = (url: string) =>
    fetch(url).then((res) => res.json() as Promise<TodoType>);
  const { data: todo, error } = useSWR("http://localhost:3100/item/1", fetcher);

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
  if (!todo) return <div>loading...</div>;

  return (
    <div>
      <h1>{todo.id}</h1>
      <p>{todo.title}</p>

      <button
        onClick={() => {
          window.history.back();
        }}
      >
        戻る
      </button>
    </div>
  );
}
