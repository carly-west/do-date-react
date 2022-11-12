import { useState } from "react";
import EditUserInfo from "../components/EditUserInfo";

import { db, auth, app } from "../components/firebase";
import { Navigate, useNavigate } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import EditUserPassword from "../components/EditUserPassword";

export default function UserPage() {
  return (
    <div className="user-page">
      <h1>Account</h1>
      <p>Change your account settings</p>
      <div className="class-editor-body">
        <div className="class-editor-content">
          <EditUserInfo />
        </div>
      </div>

      <div className="class-editor-body">
        <div className="class-editor-content">
          <EditUserPassword />
        </div>
      </div>
    </div>
  );
}
