import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const RouterComponent = import.meta.env.DEV ? BrowserRouter : HashRouter;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterComponent>
      <App />
    </RouterComponent>
  </StrictMode>
);
