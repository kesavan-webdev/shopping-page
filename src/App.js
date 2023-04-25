import Home from "./routes/home";
import NavBar from "./components/navbar/navbar.component";
import Shop from "./routes/shop";
import Cart from "./routes/cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./components/signup/signup.component";
import SignInPage from "./routes/signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", margin: "auto" }}>
              {" "}
              Page Not Found
            </h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
