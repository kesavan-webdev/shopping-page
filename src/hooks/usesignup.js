import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

export const useSignUp = () => {
  const [error, setError] = useState(null);

  const user = ({ email, password, name }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
        console.log(error.message);
        // ..
      });
  };

  return { user, error };
};
