// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";

export default function SetClassDropdown() {
  console.log("hi");
  const [user, loading, error] = useAuthState(auth);
  const setDropdown = async () => {
    const classRef = doc(db, "classes", user.email);
    const classDoc = await getDoc(classRef);
    const classObject = classDoc.data();

    // Display classes in dropdown
    const select = document.getElementById("classesDropDown");

    // Clears options so everything is only rendered once
    const selectAll = document.querySelectorAll("#classesDropDown option");
    selectAll.forEach((o) => o.remove());

    for (const [key, value] of Object.entries(classObject)) {
      const opt = document.createElement("option");
      opt.value = key;
      opt.innerHTML = value.Name;
      select.appendChild(opt);
    }
  };

  if (user) {
    setDropdown();
  }
  return <select name="classes" id="classesDropDown"></select>;
}
