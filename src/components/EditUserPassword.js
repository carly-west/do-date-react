// Import the functions you need from the SDKs you need
import { db, auth, app } from "./firebase.js";
import { getAuth, updatePassword, reauthenticateWithCredential } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import SetClassDropdown from "./SetClassDropdown.js";

export default function EditUserPassword() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    /* 
    DEFAULT PASSWORD!!!
     */
    const newPassword = "password";

    updatePassword(user, newPassword)
      .then(() => {
        // Update successful.
        console.log("update successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("unsuccessful password reset");
        console.log(errorMessage);
        console.log(errorCode);
        alert("Please login again");
        return navigate("/login");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Password</h2>

      <label>New Password</label>
      <input type="text" required />

      <label>Repeat Password</label>
      <input type="text" id="newPassword" required />

      <button type="submit" id="submitData" name="submitData" className="loginbtn">
        Update Password
      </button>
    </form>
  );
}
