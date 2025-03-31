import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ProductPage from "./pages/products/index.jsx";
import RootLayout from "./components/layouts/RootLayout.jsx";
import ProductDetails from "./pages/products/ProductDetails.jsx";
import ProductCategoriesPage from "./pages/products/categories/index.jsx";
import Login from "./pages/auth/login/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:uuid" element={<ProductDetails />} />
          <Route
            path="/products/categories/:uuid"
            element={<ProductCategoriesPage />}
          />
        </Route>
        {/* login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
