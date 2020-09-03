import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';
import Checkout from "./checkout";
import Webcam from "react-webcam";
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
const PAGE_CHECKOUT = "checkout"


function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (

    <div className="App">
      <header>
        <h1>Checkout System</h1>
      </header>
      <div className="button1">
      <button className="btn btn-warning " onClick={() => navigateTo(PAGE_CART)}>
        Go to Cart ({getCartTotal()})
      </button>

      <button className="btn btn-warning" onClick={() => navigateTo(PAGE_PRODUCTS)}>
        Scan Products
      </button>
      <button className="btn btn-warning" onClick={() => navigateTo(PAGE_CHECKOUT)}>
        Proceed to Checkout
      </button>

      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CHECKOUT && (
        <Checkout cart={cart} setCart={setCart} />
      )}


      </div>


    </div>


  );
}

export default App;
