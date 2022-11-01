// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import SetClassDropdown from "./SetClassDropdown.js";

export default function EditClass() {
  const [updateClassName, updateClass] = useState("");
  const [user, loading, error] = useAuthState(auth);

  // const setDropdown = async () => {
  //   const classRef = doc(db, "classes", user.email);
  //   const classDoc = await getDoc(classRef);
  //   const classObject = classDoc.data();

  //   // Display classes in dropdown
  //   const select = document.getElementById("classesDropDown");
  //   for (const [key, value] of Object.entries(classObject)) {
  //     const opt = document.createElement("option");
  //     opt.value = key;
  //     opt.innerHTML = value.Name;
  //     select.appendChild(opt);
  //   }
  // };

  // Only sets dropdown when user is populated
  // if (user) {
  //   setDropdown();
  // }

  function handleSubmit(e) {
    console.log("hi");
    e.preventDefault();

    var classToBeEdited;
    var classToBeEditedSelection;
    var classNameUpdated;

    const editClass = async () => {
      const classRef = doc(db, "classes", user.email);
      const classDoc = await getDoc(classRef);
      const classObject = classDoc.data();
      classToBeEdited = document.getElementById("classesDropDown");
      classToBeEditedSelection = classToBeEdited.options[classToBeEdited.selectedIndex].text;

      var classNameEdit = document.getElementById("classNameEdit").value;

      // Finds the field associated with the value
      for (const [key, value] of Object.entries(classObject)) {
        if (value.Name == classToBeEditedSelection) {
          classNameUpdated = key;
        }
      }

      // Update document without changing any other fields
      updateDoc(doc(db, "classes", user.email), {
        [`${[classNameUpdated]}.Name`]: classNameEdit,
      });
    };
    editClass();
  }

  return (
    <form id="add-class" onSubmit={handleSubmit}>
      <div className="edit-class">
        <h2>Edit Class</h2>
        <label htmlFor="classes">Class to Edit</label>
        <SetClassDropdown />

        <label htmlFor="classNameEdit">New Class Name</label>
        <input type="text" name="classNameEdit" id="classNameEdit" value={updateClassName} onChange={(e) => updateClass(e.target.value)} required />

        <button type="submit" id="editClass" name="createClass" className="createclass-btn">
          Edit Class
        </button>
      </div>
    </form>
  );
}
