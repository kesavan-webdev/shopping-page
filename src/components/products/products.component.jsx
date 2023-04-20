// import { useState } from "react";
// import { products } from "../../Data";

import ProductCard from "../product/product.component";
import "./products.styles.css";

// import { useEffect } from "react";
// import { createContext } from "react";

// export const ProductContext =createContext()
//h
import CartContext from "../../context/cartcontext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

//h
const Products = () => {
  // const [initialProduct, setInitialProducts] = useState();

  // useEffect(() => {
  //   const filterProducts = products.filter((item) => {
  //     if (item.category === "electronics") {
  //       return setInitialProducts(filterProducts);
  //     } else if (item.category === "jewelery") {
  //       return setInitialProducts(filterProducts);
  //     } else if (item.category === "men's clothing") {
  //       return setInitialProducts(filterProducts);
  //     } else if (item.category === "women's clothing") {
  //       return setInitialProducts(filterProducts);
  //     } else {
  //       return setInitialProducts(products);
  //     }
  //   });
  // });
  //h
  const { state } = useContext(CartContext);
  state.data.map((product) => console.log(product));
  //h

  return (
    <div className="products-container">
      {state.data.map((product) => {
        // console.log(product);

        return (
          <ProductCard key={uuidv4()} product={product} cart={state.cart} />
        );
      })}
    </div>
  );
};

export default Products;
