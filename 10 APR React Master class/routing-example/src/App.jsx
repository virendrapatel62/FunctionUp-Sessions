import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import {
  AdminDashboard,
  CreateProductPage,
  HardwarePage,
  Home,
  Login,
  Register,
  SoftwarePage,
  UpdateProductPage,
} from "./pages";
import ProductDetails from "./pages/admin/ProductDetails";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route path="" element={<CreateProductPage />} />
            <Route path="products/create" element={<CreateProductPage />}>
              <Route path="software" element={<SoftwarePage />}></Route>
              <Route path="hardware" element={<HardwarePage />}></Route>
            </Route>
            <Route
              path="products/update"
              element={<UpdateProductPage />}
            ></Route>
            <Route
              path="products/details/"
              element={<ProductDetails />}
            ></Route>
            <Route
              path="products/details/:productId"
              element={<ProductDetails />}
            ></Route>
          </Route>
        </Routes>
      </main>

      <footer>Footer</footer>
    </Fragment>
  );
}

export default App;
