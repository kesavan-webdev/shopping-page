// import { useState, useEffect } from "react";
// import { createContext } from "react";
// import { products } from "../Data";

// import { useState } from "react";
// import { createContext, useReducer } from "react";

// export const ShopContext = createContext(null);

// export const ShopContextProvider = ({ children }) => {
//   const [initialProduct, setInitialProducts] = useState();

//   useEffect(() => {
//     const filterProducts = products.filter((item) => {
//       if (item.category === "electronics") {
//         return setInitialProducts(filterProducts);
//       } else if (item.category === "jewelery") {
//         return setInitialProducts(filterProducts);
//       } else if (item.category === "men's clothing") {
//         return setInitialProducts(filterProducts);
//       } else if (item.category === "women's clothing") {
//         return setInitialProducts(filterProducts);
//       } else {
//         return setInitialProducts(products);
//       }
//     });
//   });
//   return <ShopContext.Provider>{children}</ShopContext.Provider>;
// };

// export const CartContext = createContext();

// export const Context = ({ children }) => {
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "Add":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// const [state, dispatch] = useReducer(reducer, []);
// const info = { state, dispatch };

import { createContext, useState } from "react";
import { products } from "../Data";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, setState] = useState({
    data: products,
    cart: [],
  });

  const addToCart = (product) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }],
    });
  };

  const increase = (product) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (product) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === product.id
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
    <CartContext.Provider
      value={{
        state: state,
        addToCart,
        increase,
        decrease,
        removeItem,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
