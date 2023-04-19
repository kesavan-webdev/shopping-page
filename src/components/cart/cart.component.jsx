import React from "react";
import { Context, useContext } from "../../context/cartcontext";
import CartItem from "../cart-item/cart.component";
const Cart = () => {
  const { state } = useContext(Context);
  console.log(state);

  return (
    <div className="cart">
      {state.cart.map((product) => {
        console.log(product);
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Cart;
