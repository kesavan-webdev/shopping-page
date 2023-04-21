import { useContext } from "react";
import "./signup.styles.css";
// import { useEffect } from "react";
import RegisterUserContext from "../../context/registerUserContext";

const SignUp = () => {
  const {
    displayname,
    setDisplayName,
    email,
    setEmail,
    password,
    setPassword,
    register,
    signInWithGoogle,
    signOutUser,
  } = useContext(RegisterUserContext);

  // const [name, setName] = useState("");
  // const [validateError, setValidateError] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  };
  const handleSubmitForGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };
  return (
    <>
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
            value={displayname}
            onChange={(e) => {
              setDisplayName(e.target.value);
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
        </div>
      </form>
      <div>
        <button onClick={handleSubmitForGoogle} className="signupbtn">
          SignIn with Google
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            signOutUser();
          }}
          className="cancelbtn"
        >
          sign Out
        </button>
      </div>
    </>
  );
};

export default SignUp;
