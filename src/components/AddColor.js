// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import SetColorDropdown from "./SetColorDropdown.js";

export default function AddColor() {
  const [user, loading, error] = useAuthState(auth);

  function handleSubmit(e) {
    e.preventDefault();

    const addColor = async () => {
      const userRef = doc(db, "users", user.email);
      const userDoc = await getDoc(userRef);
      const userObject = userDoc.data();
      const userColors = userObject.UserColors;
      console.log(userColors);

      var colorName = document.getElementById("colorName").value;
      var colorChoice = document.getElementById("colorChoice").value;

      setDoc(
        doc(db, "users", user.email),
        {
          UserColors: { [colorName]: colorChoice },
        },
        { merge: true }
      );
    };
    if (user) {
      addColor();
    }
    console.log(document.getElementById("colorChoice").value);
  }
  return (
    <form id="add-class" onSubmit={handleSubmit}>
      <div className="add-class">
        <h2>Add Color</h2>

        <label htmlFor="colorName">Color Name</label>
        <input type="text" name="colorName" id="colorName" required />

        <label htmlFor="colorChoice">Color Selection</label>
        <input type="color" name="colorChoice" id="colorChoice" required />

        <button type="submit" id="submitNewColor" name="createColor" className="createcolor-btn">
          Add Color
        </button>
      </div>
    </form>
  );
}
