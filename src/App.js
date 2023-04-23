import Home from "./routes/home";
import NavBar from "./components/navbar/navbar.component";
import Shop from "./routes/shop";
import Cart from "./routes/cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/signup/signup.component";
import SignInPage from "./routes/signin";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
