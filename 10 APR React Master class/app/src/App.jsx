import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { RandomList } from "./components/RandomList";
import { UsersApp } from "./components/UsersApp";
import { UsersAppWithoutMemo } from "./components/UserAppWithoutMemo";

const Message = React.memo(function Message({ user }) {
  console.log("Message Rendering..");
  return <h1>Hello User , {user}</h1>;
});

function MessageApp() {
  console.log("MessageApp Rendering..");

  const [username, setUserName] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  const handleclick = () => {
    setUserName(inputRef.current.value);
  };

  // const sampleFun = useCallback(() => {}, []);
  // const sampleFun = useMemo(() => {
  //   return () => {};
  // }, []);

  // const [sampleFun] = useState(() => {});

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>

      <hr />
      <input type="text" ref={inputRef} />
      <hr />
      <button onClick={handleclick}>Show Message</button>
      {/* <Message fn={sampleFun} user={username} /> */}
    </div>
  );
}

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  // [
  //   { q: 3, p: 3 },
  //   {
  //     q,
  //     p,
  //   },
  // ];

  const [nof, setNof] = useState(1);
  return (
    <div>
      {/* <MessageApp />
      <RandomList /> */}

      {/* <UsersApp /> */}
      {/* <UsersAppWithoutMemo /> */}

      {/* <MessageApp /> */}

      <br />
      <div>
        <h3>Billing Form </h3>

        <label htmlFor="">Customer Name</label>
        <input type="text" placeholder="Customer name" />

        <hr />

        {new Array(nof).fill(0).map((i, index) => (
          <div>
            <hr />
            <tr>
              <td>
                <label htmlFor="">Select Product</label>
                <select
                  name="product"
                  id=""
                  onChange={(event) => {
                    console.log(index, event.target.value);
                  }}
                >
                  <option disabled value="">
                    Slect Product
                  </option>

                  {products.map((p) => (
                    <option value={p.id}>
                      {p.title.substring(0, 20) + "..."}
                    </option>
                  ))}
                </select>
              </td>

              <td>
                <label htmlFor="">Select Product</label>
                <input type="text" placeholder="Quantity" />
              </td>
              <td hidden={index + 1 < nof}>
                <button onClick={() => setNof(nof + 1)}>Add More Item</button>
              </td>
            </tr>
            <hr />
          </div>
        ))}

        <button>Create Bill</button>

        <hr />
        <table id="bill">
          <tr>
            <td colSpan={3}>Customer Name : Virendra Patel</td>
          </tr>
          <tr>
            <td colSpan={3}>Date: 2/2/2</td>
          </tr>

          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>total</th>
          </tr>

          <tr>
            <td>Sugar</td>
            <td>20</td>
            <td>3</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>20</td>
            <td>3</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>20</td>
            <td>3</td>
            <td>60</td>
          </tr>

          <tr>
            <td colSpan={3}>Total</td>
            <td>120</td>
          </tr>
        </table>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
