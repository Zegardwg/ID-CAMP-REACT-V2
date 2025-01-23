import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Import global styles
import "./styles/style.css";

// Render the root application
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
