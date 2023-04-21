import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import { CartProvider } from "./context/cartcontext";
import { CategoryProvider } from "./context/categorycontext";
import { UserProvider } from "./context/registerUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <CategoryProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoryProvider>
    </UserProvider>
  </React.StrictMode>
);
