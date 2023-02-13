import logo from "./logo.svg";
import "./App.css";
import Products from "./ui/Products";

function App() {
  if (products && Array.isArray(products) && products.length > 0) {
    return <Products products={products} />;
  }

  return <h1>No Products</h1>;
}

export default App;

const products = [
  {
    id: 1,
    name: "Crab Brie In Phyllo",
  },
  {
    id: 2,
    name: "Tart Shells - Barquettes, Savory",
  },
  {
    id: 3,
    name: "Tuna - Bluefin",
  },
  {
    id: 4,
    name: "Beef - Texas Style Burger",
  },
  {
    id: 5,
    name: "Island Oasis - Lemonade",
  },
  {
    id: 6,
    name: "Asparagus - Mexican",
  },
  {
    id: 7,
    name: "Buffalo - Short Rib Fresh",
  },
  {
    id: 8,
    name: "Bread - Pita",
  },
  {
    id: 9,
    name: "Shichimi Togarashi Peppeers",
  },
  {
    id: 10,
    name: "Plastic Wrap",
  },
  {
    id: 11,
    name: "Bread - Assorted Rolls",
  },
  {
    id: 12,
    name: "Pork - Tenderloin, Frozen",
  },
  {
    id: 13,
    name: "Cornstarch",
  },
  {
    id: 14,
    name: "Sprouts - Alfalfa",
  },
  {
    id: 15,
    name: "Squash - Sunburst",
  },
  {
    id: 16,
    name: "Container Clear 8 Oz",
  },
  {
    id: 17,
    name: "Beef - Salted",
  },
  {
    id: 18,
    name: "Napkin Colour",
  },
  {
    id: 19,
    name: "Chips Potato Reg 43g",
  },
  {
    id: 20,
    name: "Olives - Morracan Dired",
  },
  {
    id: 21,
    name: "The Pop Shoppe - Cream Soda",
  },
  {
    id: 22,
    name: "Ice Cream - Chocolate",
  },
  {
    id: 23,
    name: "Lidsoupcont Rp12dn",
  },
  {
    id: 24,
    name: "Chocolate - Liqueur Cups With Foil",
  },
  {
    id: 25,
    name: "Vodka - Hot, Lnferno",
  },
  {
    id: 26,
    name: "Flower - Potmums",
  },
  {
    id: 27,
    name: "Beer - Corona",
  },
  {
    id: 28,
    name: "Red Pepper Paste",
  },
  {
    id: 29,
    name: "Pastry - Baked Scones - Mini",
  },
  {
    id: 30,
    name: "Pepper - Black, Whole",
  },
  {
    id: 31,
    name: "Fenngreek Seed",
  },
  {
    id: 32,
    name: "Crackers - Soda / Saltins",
  },
  {
    id: 33,
    name: "Fish - Scallops, Cold Smoked",
  },
  {
    id: 34,
    name: "Aspic - Clear",
  },
  {
    id: 35,
    name: "Sage - Ground",
  },
  {
    id: 36,
    name: "Shrimp - Black Tiger 6 - 8",
  },
  {
    id: 37,
    name: "Jolt Cola - Red Eye",
  },
  {
    id: 38,
    name: "Table Cloth 54x54 Colour",
  },
  {
    id: 39,
    name: "Cheese - Fontina",
  },
  {
    id: 40,
    name: "Bread - Onion Focaccia",
  },
  {
    id: 41,
    name: "Lamb Rack Frenched Australian",
  },
  {
    id: 42,
    name: "Mushroom - Shitake, Dry",
  },
  {
    id: 43,
    name: "Sauce - Salsa",
  },
  {
    id: 44,
    name: "Sour Cream",
  },
  {
    id: 45,
    name: "Lettuce Romaine Chopped",
  },
  {
    id: 46,
    name: "Potatoes - Mini White 3 Oz",
  },
  {
    id: 47,
    name: "Salt - Sea",
  },
  {
    id: 48,
    name: "Browning Caramel Glace",
  },
  {
    id: 49,
    name: "Muffin Hinge Container 6",
  },
  {
    id: 50,
    name: "The Pop Shoppe - Grape",
  },
];
