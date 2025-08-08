import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <>
      <Header cartCount={cart.length} />
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </>
  );
}

export default App;
