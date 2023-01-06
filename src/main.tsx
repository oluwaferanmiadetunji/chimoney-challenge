import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loader from "src/components/loader";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
