import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./i18n/i18n.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading translations...</div>}>
      <App />
    </Suspense>
  </StrictMode>
);
