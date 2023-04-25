import { useContext, useState } from "react";
import "./signup.styles.css";
// import { useEffect } from "react";
import RegisterUserContext from "../../context/registerUserContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const { error, register, signInWithGoogle } = useContext(RegisterUserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
    navigate("/sign-in");
  };
  const handleSubmitForGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
    toast.success("signed by google");
    navigate("/sign-in");
  };
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            type="text"
            placeholder="user name"
            name="user-name"
            required
          />

          <div className="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>

          <div className="error-msg">{error ? <h2>{error}</h2> : null}</div>
        </div>
      </form>
      <div>
        <div className="google-btn btn" onClick={handleSubmitForGoogle}>
          <FcGoogle className="google-icon" /> SignIn with Google
        </div>
      </div>
    </>
  );
};

export default SignUp;
