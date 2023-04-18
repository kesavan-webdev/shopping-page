import "./navbar.styles.css";

import logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="links-container">
          <ul className="links-lists">
            <li>
              <button className="btn btn-link">shop</button>
            </li>
            <li>
              <button className="btn btn-link">contact</button>
            </li>
            <li>
              <button className="btn btn-link">CartIcon</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
