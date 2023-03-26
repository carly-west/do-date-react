// Import the functions you need from the SDKs you need
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react';
import SetClassDropdown from './SetClassDropdown.js';
import SetColorDropdown from './SetColorDropdown.js';

export default function EditClass() {
  const [user] = useAuthState(auth);

  function handleSubmit(e) {
    e.preventDefault();

    var classToBeEdited;
    var classToBeEditedSelection;
    var classNameUpdated;

    const editClass = async () => {
      const classRef = doc(db, 'classes', user.email);
      const classDoc = await getDoc(classRef);
      const classObject = classDoc.data();
      classToBeEdited = document.getElementById('editClassDropdown');

      classToBeEditedSelection = classToBeEdited.options[classToBeEdited.selectedIndex].text;

      var classColor = document.getElementById('editClassColor');
      var classColorSet = classColor.options[classColor.selectedIndex].text;

      var classNameEdit = document.getElementById('classNameEdit').value;

      // Finds the field associated with the value
      for (const [key, value] of Object.entries(classObject)) {
        if (value.Name === classToBeEditedSelection) {
          classNameUpdated = key;
        }
      }

      // Update document without changing any other fields
      updateDoc(doc(db, 'classes', user.email), {
        [`${[classNameUpdated]}.Name`]: classNameEdit,
        [`${[classNameUpdated]}.Color`]: classColorSet,
      });
    };
    editClass();
  }

  return (
    <form id="add-class" onSubmit={handleSubmit}>
      <div className="edit-class">
        <h2>Edit Class</h2>
        <label htmlFor="classes">Class to Edit</label>
        <SetClassDropdown id="editClassDropdown" />

        <label htmlFor="classNameEdit">New Class Name</label>
        <input type="text" name="classNameEdit" id="classNameEdit" required />

        <label htmlFor="selectColor">Class Color</label>
        <SetColorDropdown id="editClassColor" />

        <button type="submit" id="editClass" name="createClass" className="createclass-btn">
          Edit Class
        </button>
      </div>
    </form>
  );
}
