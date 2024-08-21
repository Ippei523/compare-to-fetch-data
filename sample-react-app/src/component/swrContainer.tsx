import useSWR from "swr";
import { TodoType } from "../interface";

export function SwrContainer() {
  const fetcher = (url: string) =>
    fetch(url).then((res) => res.json() as Promise<TodoType>);
  const { data: todo, error } = useSWR(
    "jsonplaceholder.typicode.com/todos/1",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!todo) return <div>loading...</div>;

  return (
    <div>
      <h1>{todo.id}</h1>
      <p>{todo.title}</p>
    </div>
  );
}
