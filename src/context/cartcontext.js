import { createContext, useState } from "react";
import { products } from "../Data";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    toast("item added to cart");
    // console.log(state);
    // console.log(product);
    // console.log(state.data);
    // console.log(state.cart);
    // console.log(state.cart.count);
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
      cart: state.cart.map((cartItem) => {
        console.log(cartItem);
        console.log(cartItem.id);
        console.log(cartItem.count);

        //   return cartItem.id === product.id && cartItem.count > 1
        //     ? { ...cartItem, count: cartItem.count - 1 }
        //     : removeItem(product.id);
        // }

        return cartItem.id === product.id
          ? {
              ...cartItem,
              count: cartItem.count > 1 ? cartItem.count - 1 : 1,
            }
          : cartItem;
      }),
    });
  };

  const removeItem = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
    toast("item removed from cart");
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
