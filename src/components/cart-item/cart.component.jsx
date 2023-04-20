import "./cart.styles.css";

// const CartItem = () => {
//   return (
//     <div>
//       <img src="" alt="" />
//       <div>
//         <span className="name">{}</span>
//         <span className="price">
//           {} X ${}
//         </span>
//       </div>
//     </div>
//   );
// };

//j
import { Context, useContext } from "../../context/cartcontext";
//j
//h
const CartItem = ({ product }) => {
  console.log(product);

  const { increase, decrease, removeItem } = useContext(Context);
  return (
    <div className="cart-item">
      <img
        className="cart-item-image"
        src={product.image}
        alt={product.title}
      />
      <div className="cart-item-info">
        <span>
          <h3>{product.title}</h3>
          <small>price:{product.price}</small>
        </span>
        <span style={{ display: "flex" }}>
          <span>
            <b>Price:</b> Rs.{product.price} <br />
          </span>
          {product.count > 1 && (
            <>
              <span style={{ marginLeft: "1rem" }}>
                <b>Count: </b>x{product.count}
              </span>
              <span style={{ marginLeft: "1rem" }}>
                <b>Total:</b> Rs.{(product.price * product.count).toFixed(2)}
              </span>
            </>
          )}
        </span>
        <div className="btn-group">
          <button
            onClick={() => decrease(product)}
            className="btn decrease-btn"
          >
            {" "}
            -{" "}
          </button>
          <button
            onClick={() => removeItem(product.id)}
            className="btn remove-btn"
          >
            delete
          </button>
          <button
            onClick={() => increase(product)}
            className="btn increase-btn"
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

//h

export default CartItem;
