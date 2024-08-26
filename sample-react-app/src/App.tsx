import "./App.css";
import { AxiosContainer } from "./component/axiosContainer";
import { SwrContainer } from "./component/swrContainer";
import { TanstackQueryContainer } from "./component/tanstackQueryContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>React Query Sample</h1>
          {/* <SwrContainer /> */}
          {/* <AxiosContainer /> */}
          <TanstackQueryContainer />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
