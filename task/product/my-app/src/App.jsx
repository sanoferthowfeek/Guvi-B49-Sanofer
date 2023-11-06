import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Products } from "./Products.jsx";
import { Footer } from "./Footer.jsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function App() {
  return (
    <div className="App">
      <div>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}
function ProductList() {
  const [count, setCount] = useState(0);

  let prod = [
    {
      name: "Fancy Products",
      rating: "⭐⭐⭐⭐",
      price: "$40.00 - $80.00",
    },
    {
      name: "Kitchen Products",
      rating: "⭐⭐⭐⭐⭐",
      price: "$20.00",
    },
    {
      name: "Vehicles",
      rating: "⭐⭐⭐",
      price: "$50.00",
    },
    {
      name: "Makeup Products",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
    },
    {
      name: "Mat products",
      rating: "⭐⭐",
      price: "$50.00",
    },
    {
      name: "Sofa Cover",
      rating: "⭐",
      price: "$120.00 - $280.00",
    },
    {
      name: "Bed cover",
      rating: "⭐⭐⭐⭐⭐",
      price: "$20.00",
    },
    {
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
    },
  ];
  return (
    <div>
      <div className="nav-bar">
        <h3 className="start">Start </h3>
        <p>Home</p>
        <p>About</p>
        <p>Shop</p>

        <div className="cart">
          <ShoppingCartIcon></ShoppingCartIcon>Cart {count}
        </div>
      </div>

      <div className="sub-topic">
        <h1 className="heading">Daily Blossoms</h1>
        <span>shop this page</span>
      </div>
      <div className="boxes">
        {prod.map((pro, index) => (
          <Products
            product={pro}
            key={index}
            count={count}
            setCount={setCount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;