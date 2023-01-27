// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc, deleteField } from "firebase/firestore";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import SetClassDropdown from "./SetClassDropdown.js";
import SetColorDropdown from "./SetColorDropdown.js";

export default function EditColor() {
  const [user, loading, error] = useAuthState(auth);

  function handleSubmit(e) {
    e.preventDefault();

    var colorToBeEdited;
    var colorToBeEditedSelection;
    var colorNameUpdated;

    const editColor = async () => {
      const userRef = doc(db, "users", user.email);
      const userDoc = await getDoc(userRef);
      const userObject = userDoc.data();
      const userColors = userObject.UserColors;
      colorToBeEdited = document.getElementById("editColor");
      colorToBeEditedSelection = colorToBeEdited.options[colorToBeEdited.selectedIndex].text;

      var colorNameEdit = document.getElementById("colorNameEdit").value;
      var newColorChoice = document.getElementById("newColorChoice").value;

      // Deletes and then adds color
      // Update document without changing any other fields
      await updateDoc(doc(db, "users", user.email), {
        [`UserColors.${[colorToBeEditedSelection]}`]: deleteField(),
      });

      await setDoc(
        doc(db, "users", user.email),
        {
          UserColors: { [colorNameEdit]: newColorChoice },
        },
        { merge: true }
      );
    };
    editColor();
  }

  return (
    <form id="add-class" onSubmit={handleSubmit}>
      <div className="edit-class">
        <h2>Edit Color</h2>
        <label htmlFor="classes">Color to Edit</label>
        <SetColorDropdown id="editColor" />

        <label htmlFor="colorNameEdit">New Color Name</label>
        <input type="text" name="colorNameEdit" id="colorNameEdit" required />

        <label htmlFor="newColorChoice">Color Selection</label>
        <input type="color" name="newColorChoice" id="newColorChoice" required />

        <button type="submit" id="editColorButton" name="editColorButton" className="createclass-btn">
          Edit Color
        </button>
      </div>
    </form>
  );
}
