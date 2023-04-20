import Home from "./routes/home";
import NavBar from "./components/navbar/navbar.component";
import Shop from "./routes/shop";
import Cart from "./routes/cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./routes/signin";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
