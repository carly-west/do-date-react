// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import SetClassDropdown from "./SetClassDropdown.js";

export default function EditUserInfo() {
  const [user, loading, error] = useAuthState(auth);

  //   Set name in user information input
  const setName = async () => {
    const nameRef = doc(db, "users", user.email);
    const nameDoc = await getDoc(nameRef);
    const nameObject = nameDoc.data();
    document.getElementById("nameEdit").value = nameObject.name;
  };
  if (user) {
    setName();
  }
  function handleSubmit(e) {
    e.preventDefault();

    const editUserInfo = async () => {
      var nameEdit = document.getElementById("nameEdit").value;

      // Update document without changing any other fields
      updateDoc(doc(db, "users", user.email), {
        name: nameEdit,
      });
    };

    editUserInfo();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Information</h2>

      <label>Name</label>
      <input type="text" id="nameEdit" value="" readOnly required />

      <button type="submit" id="submitData" name="submitData" className="loginbtn">
        Update Account
      </button>
    </form>
  );
}
