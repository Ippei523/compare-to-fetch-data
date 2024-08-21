import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AxiosContainer } from "./component/axiosContainer";
import { SwrContainer } from "./component/swrContainer";
import { TanstackQueryContainer } from "./component/reactQueryContainer";
import { Home } from "./component/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/axios" element={<AxiosContainer />} />
          <Route path="/swr" element={<SwrContainer />} />
          <Route path="/tanstack-query" element={<TanstackQueryContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
