import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth, provider } from "../utils/firebase";

const RegisterUserContext = createContext();

export function UserProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayName] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setDisplayName(currentUser.displayName);
  });

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      setDisplayName(user.displayName);
      console.log(displayname);
    });
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      setDisplayName(user.user.email);
      console.log(displayname);
    } catch (error) {
      console.log(error.msg);
    }
  };

  const signOutUser = async () => {
    await signOut(auth);
    setDisplayName(displayname);
  };

  return (
    <RegisterUserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        displayname,
        setDisplayName,
        register,
        signInWithGoogle,
        signOutUser,
      }}
    >
      {children}
    </RegisterUserContext.Provider>
  );
}

export default RegisterUserContext;
