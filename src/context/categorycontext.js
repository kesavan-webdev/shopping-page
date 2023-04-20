import { createContext, useState } from "react";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  // const [initialProduct, setInitialProducts] = useState();
  const filteredProducts = null;
  // const filteredProducts = products.filter((item) => {
  // if (item.category === "electronics") {
  //   return setInitialProducts(filterProducts);
  // } else if (item.category === "jewelery") {
  //   return setInitialProducts(filterProducts);
  // } else if (item.category === "men's clothing") {
  //   return setInitialProducts(filterProducts);
  // } else if (item.category === "women's clothing") {
  //   return setInitialProducts(filterProducts);
  // } else {
  //   return setInitialProducts(products);
  // }
  // });

  return (
    <CategoryContext.Provider value={{ filteredProducts }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContext;
