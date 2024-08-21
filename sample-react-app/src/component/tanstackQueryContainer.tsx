import { useQuery } from "@tanstack/react-query";
import { TodoType } from "../interface";

export function TanstackQueryContainer() {
  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3100/item/1");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json() as Promise<TodoType>;
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["example"],
    queryFn: fetchTodos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
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
  );
}
