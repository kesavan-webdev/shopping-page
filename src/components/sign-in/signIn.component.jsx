import "./signIn.styles.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

import RegisterUserContext from "../../context/registerUserContext";
import { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(RegisterUserContext);

  const navigate = useNavigate();

  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user.email);
        navigate("/shop");
        toast("Logged-In");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;

        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        toast.error(errorCode);
      });
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={signInUser}>
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

          <div className="clearfix">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign In
            </button>
          </div>
        </div>
      </form>

      <div className="sign-up-link">
        <p>
          Don't have an Account please
          <Link to={"/sign-up"}>
            <span className="btn sign-up-link-btn"> Sign Up</span>
          </Link>
        </p>
      </div>
    </>
  );
};
export default SignIn;
