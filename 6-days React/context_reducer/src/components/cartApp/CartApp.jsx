import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const CartContext = createContext();

const useAppData = () => {
  return useContext(CartContext);
};
const useProducts = () => {
  return useAppData().products;
};
const useCartCount = () => {
  return useAppData()?.cart?.length || 0;
};
const useCartActions = () => {
  const appData = useAppData();

  return {
    addToCart: appData.addToCart,
    removeFromCart: appData.removeFromCart,
    isInCart: appData.isInCart,
  };
};
export default function CartApp() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [value, setValue] = useState({
    products: [],
    cart: [],
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      localStorage.setItem("app-data", JSON.stringify(value));
    } else {
      const appData = JSON.parse(localStorage.getItem("app-data"));
      setCart(appData.cart);
      setProducts(appData.products);
    }

    isFirstRender.current = false;
  }, [value]);

  useEffect(() => {
    setValue({
      ...value,
      products,
      cart,
    });
  }, [products, cart]);

  const addToCart = (id) => {
    setCart(Array.from(new Set([...cart, id])));
  };
  const removeFromCart = (id) => {
    cart.splice(cart.indexOf(id), 1);

    setCart([...cart]);
  };

  const isInCart = (id) => {
    return cart.includes(id);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  /**
   * cart : [2 , 3, 5, 6]
   */

  return (
    <CartContext.Provider
      value={{
        ...value,
        removeFromCart,
        isInCart,
        addToCart,
      }}
    >
      <Header />
      <HomePage />
    </CartContext.Provider>
  );
}

function sendCartAddRequest() {
  return new Promise((resolve, rej) => {
    console.log("Sending Server Request");
    setTimeout(() => {
      console.log("Got Server Response");

      resolve();
    }, 2000);
  });
}

function Product({ product }) {
  const { addToCart, isInCart, removeFromCart } = useCartActions();

  function _addToCart(id) {
    addToCart(id);
    sendCartAddRequest(id)
      .then(() => {
        console.log("now product added");
      })
      .catch(() => {
        removeFromCart(id);
      });
  }
  return (
    <div>
      <h3>{product.title}</h3>
      <p className="price">{product.price}</p>

      <div className="button-wrapper">
        {isInCart(product.id) ? (
          <button onClick={() => removeFromCart(product.id)}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => _addToCart(product.id)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
}

function HomePage() {
  const products = useProducts();
  return (
    <div className="cartApp-products">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

function Header() {
  const count = useCartCount();
  return (
    <ul className="cartApp-header">
      <li>Home</li>
      <li>
        Cart <b className="cart-badge">{count}</b>
      </li>
    </ul>
  );
}

// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//       "rate": 3.9,
//       "count": 120
//   }
// }
