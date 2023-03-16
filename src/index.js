import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <p>Tick Tack Toes</p>
    <hr />
    <App />
  </StrictMode>
);
