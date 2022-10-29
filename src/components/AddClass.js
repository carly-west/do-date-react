// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, getDoc, getFirestore, query, collection, getDocs, where, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";

export default function AddClass() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      return;
    }
    // Navigate to the correct collection
    const classNameRef = collection(db, "classes");

    // Add info to collection
    addDoc(classNameRef, { name })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
    alert(name);
  }
  return (
    <form id="add-class" onSubmit={handleSubmit}>
      <div className="add-class">
        <h2>Create Class</h2>

        <label htmlFor="className">Class Name</label>

        <input type="text" name="className" id="className" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="selectColor">Class Color</label>

        <select name="selectColor" id="selectColor">
          <option value="red" id="red">
            Red
          </option>
          <option value="orange" id="orange">
            Orange
          </option>
          <option value="yellow" id="yellow">
            Yellow
          </option>
          <option value="green" id="green">
            Green
          </option>
          <option value="blue" id="blue">
            Blue
          </option>
          <option value="purple" id="purple">
            Purple
          </option>
        </select>

        <button type="submit" id="submitNewClass" name="createClass" className="createclass-btn">
          Create Class
        </button>
      </div>
    </form>
  );
}
