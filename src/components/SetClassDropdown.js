// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";

export default function SetClassDropdown(props) {
  const [user, loading, error] = useAuthState(auth);

  const setDropdown = async () => {
    const classRef = doc(db, "classes", user.email);
    const classDoc = await getDoc(classRef);
    const classObject = classDoc.data();

    if (classObject) {
      // Display classes in dropdown
      // Clears options so everything is only rendered once
      const selectAllOption = document.querySelectorAll(".classesDropDown option");
      selectAllOption.forEach((o) => o.remove());

      var selectAllClasses = document.querySelectorAll(".classesDropDown");
      var length = selectAllClasses.length;

      for (var i = 0; i < length; i++) {
        for (const [key, value] of Object.entries(classObject)) {
          const opt = document.createElement("option");
          opt.value = key;
          opt.innerHTML = value.Name;
          // opt.id = component.componentName;
          selectAllClasses[i].appendChild(opt);
        }
      }
    }
  };

  //   Only call function if state renders that user is logged in
  if (user) {
    setDropdown();
  }
  return <select name="classes" id={props.id} className="classesDropDown"></select>;
}
