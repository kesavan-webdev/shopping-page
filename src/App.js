import Home from "./routes/home";
import NavBar from "./components/navbar/navbar.component";
import Shop from "./routes/shop";
import Cart from "./routes/cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//h
import { useState, useEffect } from "react";
import { Context } from "./context/cartcontext";
import { products } from "./Data";
//h

const App = () => {
  //hh
  const [state, setState] = useState({
    data: products,
    cart: [],
  });

  const addToCart = (val) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === val.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === val.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...val, count: 1 }],
    });
  };

  const increase = (book) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === book.id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (book) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === book.id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  const removeItem = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
  };

  const cartItemCount = state.cart.reduce(
    (acc, data) => (acc += data.count),
    0
  );
  //h

  return (
    <BrowserRouter>
      <Context.Provider
        value={{
          state: state,
          addToCart,
          increase,
          decrease,
          removeItem,
          cartItemCount,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
