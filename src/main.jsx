import React from "react";
import { BrowserRouter } from "react-router";
import App from "./App";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/practice_vanilla_redux_1_part_1">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
