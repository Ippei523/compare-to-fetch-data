import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AxiosContainer } from "./component/axiosContainer";
import { SwrContainer } from "./component/swrContainer";
import { TanstackQueryContainer } from "./component/tanstackQueryContainer";
import { Home } from "./component/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/axios" element={<AxiosContainer />} />
            <Route path="/swr" element={<SwrContainer />} />
            <Route
              path="/tanstack-query"
              element={<TanstackQueryContainer />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
