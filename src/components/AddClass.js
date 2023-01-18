// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import SetColorDropdown from "./SetColorDropdown.js";
import FindMaxNum from "./FindMaxNum";

export default function AddClass() {
  const [user, loading, error] = useAuthState(auth);

  function handleSubmit(e) {
    e.preventDefault();
    const setClasses = async () => {
      const classRef = doc(db, "classes", user.email);
      const classDoc = await getDoc(classRef);
      const classObject = classDoc.data();

      var classIdList = Object.keys(classObject);

      // Finds last class number
      var maxClassNum = FindMaxNum(classIdList, 5);

      var lastClassName = "class".concat(maxClassNum);
      console.log(lastClassName);

      if (typeof lastClassName == "string") {
        console.log(lastClassName.match(/\d+/)[0]);
      }

      // Get the user choices
      var newClassName = "class" + (maxClassNum + 1);
      var className = document.getElementById("className").value;
      var classColor = document.getElementById("addClass");

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
        <input type="text" name="className" id="className" required />

        <label htmlFor="selectColor">Class Color</label>
        <SetColorDropdown id="addClass" />

        <button type="submit" id="submitNewClass" name="createClass" className="createclass-btn">
          Create Class
        </button>
      </div>
    </form>
  );
}
