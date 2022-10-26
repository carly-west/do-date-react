import { useState } from "react";
import { db, auth, app } from "../components/firebase";

// Import the functions you need from the SDKs you need
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

export default function Logout() {
  console.log("hiiii");
  auth.signOut();
  console.log("User signed out!");
}
