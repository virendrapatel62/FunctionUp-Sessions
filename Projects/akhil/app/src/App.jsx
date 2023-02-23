import logo from "./logo.svg";
import "./App.css";

import { faker } from "@faker-js/faker";
import { useState } from "react";

function App() {
  const [categories] = useState(Object.keys(faker));
  const [subCategories, setSubCategories] = useState([]);
  const [count, setCount] = useState(0);
  const [key, setKey] = useState("");
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const onCategoryChange = ({ target: { name, value } }) => {
    console.log(value);
    setSelectedCategory(value);
    setSubCategories(Object.keys(faker[value]));
  };
  const onSubCategoryChange = ({ target: { name, value } }) => {
    console.log(value);
    setSelectedSubCategory(value);
  };

  const onGenrate = () => {
    const list = [];
    for (let index = 0; index < count; index++) {
      const obj = {
        [key]: faker[selectedCategory][selectedSubCategory](),
      };

      list.push(obj);
    }
    setData(list);
  };

  const OnCountChange = ({ target: { name, value } }) => {
    setCount(value);
  };

  return (
    <div>
      <h1>APp</h1>

      {selectedCategory}
      <br />

      <input
        value={key}
        onChange={(event) => setKey(event.target.value)}
        type="text"
        placeholder="Key"
        name=""
        id=""
      />
      <br />
      <select name="category" onChange={onCategoryChange} id="">
        {categories.map((cat) => (
          <option value={cat}>{cat}</option>
        ))}
      </select>
      <br />
      <select name="sub-category" onChange={onSubCategoryChange} id="">
        {subCategories.map((cat) => (
          <option value={cat}>{cat}</option>
        ))}
      </select>

      <hr />

      <input
        onChange={OnCountChange}
        type="number"
        placeholder="Count"
        value={count}
        name="count"
        id=""
      />

      <hr />
      <br />

      <button onClick={onGenrate}>Generate</button>

      <hr />

      <pre>{JSON.stringify(data, null, 3)}</pre>
    </div>
  );
}

export default App;
