import { useState } from "react";
import { createContext, useContext } from "react";
import { products } from "../Data";


export const CategoriesContext = createContext()

const [initialProduct,setFilteredProducts] useState([products])

export const categoryFilterProducts=initialProducts.filter((item)=>item.category ==="jewelery")

console.log(categoryFilterProducts);