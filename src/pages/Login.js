import { useState } from "react";
import { db, auth, app } from "../components/firebase";
import { Navigate } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

export default function Login() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user logged- sign in with email and password");
        return <Navigate to="/classEditor" />;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("unsuccessful creation");
        return <Navigate to="/login" />;
      });
  };

  return (
    <form id="login-partial" onSubmit={handleSubmit}>
      <h1>Login</h1>

      <label>Email</label>
      <input type="text" value={email} onChange={(event) => setUsername(event.target.value)} />

      <label>Password</label>
      <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />

      <button type="submit" id="submitData" name="submitData" className="loginbtn">
        Login
      </button>
    </form>
  );
}
