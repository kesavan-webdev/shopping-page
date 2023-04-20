import React from "react";
import CartContext from "../../context/cartcontext";
import { useContext } from "react";
import CartItem from "../cart-item/cart.component";
const Carts = () => {
  const { state } = useContext(CartContext);
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

export default Carts;
