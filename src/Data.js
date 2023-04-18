// import { useEffect, useState } from "react";
// import Home from "./routes/home/home";

// const url = "https://dummyjson.com/products";

// const Data = () => {
//   // useState hook
//   const [isLoading, setIsLoading] = useState(true);
//   const [initialData, setInitialData] = useState([]);

//   // fetching data using api
//   const fetchApi = async () => {
//     const response = await fetch(url);
//     const data = await response.json();

//     const { products } = data;

//     setIsLoading(false);
//     setInitialData(products);
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   if (isLoading) {
//     return <div>loading...</div>;
//   }

//   return {initialData.map((val) => <Home {...val} />)};
// };
// export default Data;

export const categories = [
  {
    id: 1,
    title: "electronics",
    img: "https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-1000x1000.jpg",
  },
  {
    id: 2,
    title: "jewelery",
    img: "https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-1000x1000.jpg",
  },
  {
    id: 3,
    title: "men's clothing",
    img: "https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-1000x1000.jpg",
  },
  {
    id: 4,
    title: "women's clothing",
    img: "https://5.imimg.com/data5/SELLER/Default/2020/10/CD/IZ/IY/12789060/mens-jackets-1000x1000.jpg",
  },
];
