import { useState } from "react";
import "./signup.styles.css";

import { useSignUp } from "../../hooks/usesignup";
// import { useEffect } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const [validateError, setValidateError] = useState("");

  const { user, error } = useSignUp();

  // if (!email) {
  //   setValidateError("email cant be empty");
  //   return;
  // } else if (!password) {
  //   setValidateError("password cant be empty");
  //   return;
  // } else if (!name) {
  //   setValidateError("name cant be empty");
  //   return;
  // }
  console.log(email, password, name);
  user({ email, password, name });
  console.log(error);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
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
        {/* <div className="error">{validateError}</div> */}
      </div>
    </form>
  );
};

export default SignUp;
