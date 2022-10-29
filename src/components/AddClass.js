// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";

export default function AddClass() {
  const [newClassName, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);

  function handleSubmit(e) {
    e.preventDefault();

    const setClasses = async () => {
      const classRef = doc(db, "classes", user.email);
      const classDoc = await getDoc(classRef);
      const classObject = classDoc.data();

      // Get the user choices
      var classColor = document.getElementById("selectColor");
      var newClassName = "class" + (Object.keys(classObject).length + 1);
      var className = document.getElementById("className").value;
      var classColor = document.getElementById("selectColor");
      var classColorSet = classColor.options[classColor.selectedIndex].text;

      setDoc(
        doc(db, "classes", user.email),
        {
          // Capitalizes first letter of name
          [newClassName]: { Name: className.charAt(0).toUpperCase() + className.slice(1), Color: classColorSet, Assignments: {} },
        },
        { merge: true }
      );
    };
    setClasses();
  }
  return (
    <form id="add-class" onSubmit={handleSubmit}>
      <div className="add-class">
        <h2>Create Class</h2>

        <label htmlFor="className">Class Name</label>

        <input type="text" name="className" id="className" value={newClassName} onChange={(e) => setName(e.target.value)} required />

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
