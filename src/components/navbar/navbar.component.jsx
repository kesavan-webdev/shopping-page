import "./navbar.styles.css";

import logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";

import { ImCart } from "react-icons/im";

import CartContext from "../../context/cartcontext";
import RegisterUserContext from "../../context/registerUserContext";

import { useContext } from "react";

const NavBar = () => {
  const { cartItemCount } = useContext(CartContext);
  const { user, signOutUser } = useContext(RegisterUserContext);

  return (
    <>
      <nav className="nav-bar">
        <div className="logo-container">
          <Link to={"/"}>
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="links-container">
          <ul className="links-lists">
            <li>
              <Link to={"/shop"} className="btn btn-link">
                shop
              </Link>
            </li>
            <li>
              <Link to={"/sign-in"} className="btn btn-link">
                Sign-In
              </Link>
            </li>
            <li>
              <Link to={"/cart"} className="btn btn-link">
                <ImCart /> ({cartItemCount > 0 ? cartItemCount : 0})
              </Link>
            </li>
            <li onClick={signOutUser}>
              <div className="btn" style={{ color: "#222222" }}>
                {user || "guest"}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
