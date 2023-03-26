// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, updateDoc, deleteField } from 'firebase/firestore';
import { db, auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react';
import SetColorDropdown from './SetColorDropdown.js';

export default function EditColor() {
  const [user] = useAuthState(auth);

  function handleSubmit(e) {
    e.preventDefault();

    var colorToBeEdited;
    var colorToBeEditedSelection;

    const editColor = async () => {
      const classRef = doc(db, 'classes', user.email);
      const classDoc = await getDoc(classRef);
      const classObject = classDoc.data();

      colorToBeEdited = document.getElementById('editColor');
      colorToBeEditedSelection = colorToBeEdited.options[colorToBeEdited.selectedIndex].text;

      var colorNameEdit = document.getElementById('colorNameEdit').value;
      var newColorChoice = document.getElementById('newColorChoice').value;

      // Finds the field associated with the value
      for (const [key, value] of Object.entries(classObject)) {
        if (value.Color === colorToBeEditedSelection) {
          await updateDoc(doc(db, 'classes', user.email), {
            [`${[key]}.Color`]: colorNameEdit,
          });
        }
      }

      // Deletes and then adds color
      // Update document without changing any other fields
      await updateDoc(doc(db, 'users', user.email), {
        [`UserColors.${[colorToBeEditedSelection]}`]: deleteField(),
      });

      await setDoc(
        doc(db, 'users', user.email),
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
