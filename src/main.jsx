import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/Auth.jsx";
import "antd/dist/reset.css";
import { SearchProvider } from "./Context/Search.jsx";
import { CartProvider } from "./Context/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);
