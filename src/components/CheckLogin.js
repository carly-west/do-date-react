// Import the functions you need from the SDKs you need
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

export const CheckLogin = async () => {
  const [user, loading, error] = useAuthState(auth);

  var userAuthState = useAuthState(auth)[0];

  if (userAuthState != null) {
    return true;
  } else {
    return false;
  }
};
