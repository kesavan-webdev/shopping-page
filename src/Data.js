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
