// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, getDoc, getFirestore, query, collection, getDocs, where } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";

export default function GetUserName() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  console.log(user?.email);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("email", "==", user?.email));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      console.log(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  fetchUserName();
}
