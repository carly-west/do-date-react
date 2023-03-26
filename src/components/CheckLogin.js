// Import the functions you need from the SDKs you need
import { auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';

export const CheckLogin = async () => {
  var userAuthState = useAuthState(auth)[0];

  if (userAuthState != null) {
    return true;
  } else {
    return false;
  }
};
