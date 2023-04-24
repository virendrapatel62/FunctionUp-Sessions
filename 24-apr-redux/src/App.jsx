import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <ul>
            <li>
              <Link to={"/products"}>Products</Link>
              <Link to={"/blog"}>Blog</Link>
            </li>
          </ul>

          <hr />
          <h1>Redux </h1>
          <hr />

          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
