import "./navbar.styles.css";

import logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";
//h
import { Context, useContext } from "../../context/cartcontext";
//h
const NavBar = () => {
  const { cartItemCount } = useContext(Context);

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
              <Link to={"/sign-In"} className="btn btn-link">
                Sign-In
              </Link>
            </li>
            <li>
              <Link to={"/cart"} className="btn btn-link">
                CartIcon ({cartItemCount > 0 ? cartItemCount : 0})
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
