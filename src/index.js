import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import { CartProvider } from "./context/cartcontext";
import { CategoryProvider } from "./context/categorycontext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CategoryProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CategoryProvider>
  </React.StrictMode>
);
