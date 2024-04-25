import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Registration/Login";
import Pagenotfound from "./Pages/Pagenotfound/Pagenotfound";
import AdminRoute from "./Components/Routes/AdminRoute";
import Forgot from "./Pages/Registration/Forgot";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import CreateCategory from "./Pages/Admin/CreateCategory";
import CreateProduct from "./Pages/Admin/CreateProduct";
import Users from "./Pages/Admin/Users";
import Private from "./Components/Routes/Private";

import Orders from "./Pages/User/Orders";
import Profile from "./Pages/User/Profile";
import Dashboard from "./Pages/User/Dashboard";
import Products from "./Pages/Admin/Products";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import SearchResult from "./Pages/SearchResult/SearchResult";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CategoryProduct from "./Pages/CategoryProduct/CategoryProduct";
import CartPage from "./Pages/CartPages/CartPages";
import AdminOrders from "./Pages/Admin/AdminOrders";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
