import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <ul>
        <li>
          <button
            onClick={() => {
              navigate("/axios");
            }}
          >
            AXIOS PAGE
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/swr");
            }}
          >
            SWR PAGE
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/tanstack-query");
            }}
          >
            TANSTACK QUERY PAGE
          </button>
        </li>
      </ul>
    </div>
  );
}
