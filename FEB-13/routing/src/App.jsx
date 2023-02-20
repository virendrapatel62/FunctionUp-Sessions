import { Fragment } from "react";
import "./App.css";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
  useParams,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate({
      pathname: "/profile",
      search: `userid=${crypto.randomUUID()}`,
    });
  };
  return (
    <Fragment>
      <header>
        <h4>
          <Link to={""}>Home</Link>
        </h4>
        <ul>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <a href="#" onClick={goToProfile}>
              Profile
            </a>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/orders/:userid" element={<Orders />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Fragment>
  );
}

function HomePage() {
  return <h1>Home Page</h1>;
}

function Orders() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userid } = useParams();

  const goBack = () => {
    navigate(-1);
  };

  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <main>
      <h1>Order Page</h1>
      <h1>Showing Orders Of {userid}</h1>
      <button onClick={goBack}>Go back</button>
      <button onClick={goToCart}>Cart Page</button>
    </main>
  );
}
function Cart() {
  return <h1>Cart Page</h1>;
}

function Profile() {
  const [query, setQuery] = useSearchParams();
  return (
    <main>
      <h1>Profile Page</h1>
      <pre>{JSON.stringify(Object.fromEntries(query), null, 3)}</pre>

      <button
        onClick={() => {
          setQuery({
            name: "Virendra",
            ...Object.fromEntries(query),
          });
        }}
      >
        Add Name in Query
      </button>
    </main>
  );
}

export default App;
