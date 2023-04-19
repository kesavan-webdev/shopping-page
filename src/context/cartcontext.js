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

import { createContext, useContext } from "react";

const Context = createContext();

export { Context, useContext };
