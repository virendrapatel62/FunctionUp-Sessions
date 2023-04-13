import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const ShopContext = React.createContext();

const useShop = () => {
  return useContext(ShopContext);
};

export default function ContextApp() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
    });
    fetchCart().then((cart) => {
      setCart(cart[0].products);
    });
  }, []);

  const addToCart = (productId) => {
    setCart([
      ...cart,
      {
        productId: productId,
        quantity: 1,
      },
    ]);
  };

  const value = {
    products,
    cart,
    addToCart,
  };

  return (
    <ShopContext.Provider value={value}>
      <tr>
        <td>
          <Products />
        </td>
        <td>
          <Cart />
        </td>
      </tr>
    </ShopContext.Provider>
  );
}

function Products() {
  const { products } = useShop();
  return (
    <>
      <ul>
        {products.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </ul>
    </>
  );
}

function ProductItem({ product }) {
  return (
    <li>
      {product.title} <AddToCartButton product={product} />
    </li>
  );
}

function AddToCartButton(props) {
  const { addToCart } = useShop();

  return <button onClick={() => addToCart(props.product.id)}>+</button>;
}

function Cart() {
  const { cart } = useShop();

  return (
    <div>
      <ul>
        {cart.map((p) => (
          <li>
            ID : {p.productId} - Qunt : {p.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

function fetchProducts() {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data);
}
function fetchCart() {
  return axios
    .get("https://fakestoreapi.com/carts")
    .then((response) => response.data);
}
