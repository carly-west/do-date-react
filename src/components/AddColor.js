// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import SetColorDropdown from "./SetColorDropdown.js";

export default function AddColor() {
  function handleSubmit(e) {
    e.preventDefault();
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
