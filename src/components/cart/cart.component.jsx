import "./carts.styles.css";
import React from "react";
import CartContext from "../../context/cartcontext";
import { useContext } from "react";
import CartItem from "../cart-item/cart.component";
const Carts = () => {
  const { state } = useContext(CartContext);
  // console.log(state);

  return (
    <div>
      {state.cart.length === 0 ? (
        <h3 className="cart-heading">Cart is Empty! shop Now</h3>
      ) : (
        <h3 className="cart-heading">Your Cart Items</h3>
      )}
      <div className="cart">
        {state.cart.map((product) => {
          // console.log(product);
          return <CartItem key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Carts;
