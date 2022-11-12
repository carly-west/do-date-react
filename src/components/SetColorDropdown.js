// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";

export default function SetColorDropdown() {
  const [user, loading, error] = useAuthState(auth);
  const setDropdown = async () => {
    const userRef = doc(db, "users", user.email);
    const userDoc = await getDoc(userRef);
    const userObject = userDoc.data();
    const userColors = userObject.UserColors;

    if (userColors) {
      // Display colors in dropdown
      const select = document.getElementById("selectColor");

      // Clears options so everything is only rendered once
      const selectAll = document.querySelectorAll("#selectColor option");
      selectAll.forEach((o) => o.remove());

      for (const [key, value] of Object.entries(userColors)) {
        const opt = document.createElement("option");
        opt.innerHTML = key;
        select.appendChild(opt);
        opt.setAttribute("value", key.toLowerCase());
        opt.setAttribute("id", key.toLowerCase());
      }
    }
  };

  //   Only call function if state renders that user is logged in
  if (user) {
    setDropdown();
  }
  return <select name="selectColor" id="selectColor"></select>;
}
