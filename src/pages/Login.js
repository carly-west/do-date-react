import { useState } from "react";
import { db, auth, app } from "../components/firebase";

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
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log("unsuccessful creation");
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
