import "./product.styles.css";

//h
import CartContext from "../../context/cartcontext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterUserContext from "../../context/registerUserContext";

//h

// const ProductCard = ({ product }) => {
//   const { title, image, price, rating } = product;

//   return (
//     <>
//       <div className="product-card">
//         <div className="product-info">
//           <div className="img-container">
//             <img className="img" src={image} alt={title} />
//           </div>
//           <h3 className="title">{title}</h3>

//           <h2 className="price">Rs.{price}</h2>
//           <h3 className="rating">
//             Rating: <span>{rating.rate}</span>
//           </h3>
//         </div>
//         <div className="btn-container">
//           <button className="btn btn-addToCart" onClick={() => {}}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

//h
const ProductCard = (props) => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(RegisterUserContext);

  const { product, cart } = props;

  return (
    <>
      <ToastContainer />
      <div className="product-card">
        <div className="product-info">
          <div className="img-container">
            <img className="img" src={product.image} alt={product.title} />
          </div>
          <h3 className="title">{product.title}</h3>

          <h2 className="price">Rs.{product.price}</h2>
          <h3 className="rating">
            Rating: <span>{product.rating.rate}</span>
          </h3>
        </div>
        {user !== "guest" ? (
          <div className="btn-container">
            <button
              className="btn btn-addToCart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            {cart.map((cartItem) =>
              cartItem.id === product.id ? (
                cartItem.count > 0 ? (
                  <span style={{ marginLeft: "5px" }}>
                    {" "}
                    ({cartItem.count} in the shopping cart){" "}
                  </span>
                ) : null
              ) : null
            )}
          </div>
        ) : (
          <button
            className="btn btn-addToCart"
            onClick={() => {
              toast.error("please Sign In");
            }}
          >
            {" "}
            Add to Cart{" "}
          </button>
        )}
      </div>
    </>
  );
};
//h
export default ProductCard;
