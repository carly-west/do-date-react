// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, updateDoc, where, deleteField } from "firebase/firestore";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import SetClassDropdown from "./SetClassDropdown.js";

export default function DeleteClass() {
  const [user, loading, error] = useAuthState(auth);
  var classNameUpdated;

  function handleSubmit(e) {
    e.preventDefault();

    var classToBeEdited = document.getElementById("deleteClass");
    var classToBeEditedSelection = classToBeEdited.options[classToBeEdited.selectedIndex].text;

    const removeClass = async () => {
      const classRef = doc(db, "classes", user.email);
      const classDoc = await getDoc(classRef);
      const classObject = classDoc.data();

      const classToBeDeletedRef = doc(db, "classes", user.email);

      // Finds the field associated with the value
      for (const [key, value] of Object.entries(classObject)) {
        if (value.Name == classToBeEditedSelection) {
          classNameUpdated = key;
        }
      }

      await updateDoc(classToBeDeletedRef, {
        [classNameUpdated]: deleteField(),
      });
    };
    if (user) {
      removeClass();
    }
  }

  return (
    <form id="add-class" onSubmit={handleSubmit}>
      <div className="edit-class">
        <h2>Delete Class</h2>
        <label htmlFor="classes">Class to delete</label>
        <SetClassDropdown id="deleteClass" />

        <button type="submit" id="editClass" name="createClass" className="createclass-btn">
          Delete Class
        </button>
      </div>
    </form>
  );
}
