import { useQuery } from "@tanstack/react-query";
import { TodoType } from "../interface";

export function TanstackQueryContainer() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["example"],
    queryFn: async (): Promise<TodoType> => {
      const response = await fetch("http://localhost:3100/item/1");
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
      <h1>TanStack Query</h1>
      <p>{data?.id}</p>
      <p>{data?.title}</p>
    </div>
  );
}
