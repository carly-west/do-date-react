import { useState } from "react";
import { db, auth, app } from "../components/firebase";
import { Navigate, useNavigate } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user logged- sign in with email and password");
        return navigate("/classEditor");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("unsuccessful creation");
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("incorrectInputText").innerHTML = "The email or password you entered is incorrect.";
        document.getElementById("incorrectInputText").style.color = "red";
        return navigate("/login");
      });
  };

  return (
    <div className="class-editor-body">
      <div className="class-editor-content">
        <form id="login-partial" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <label>Email</label>
          <input type="email" value={email} onChange={(event) => setUsername(event.target.value)} />

          <label>Password</label>
          <input type="password" value={password} id="password" onChange={(event) => setPassword(event.target.value)} />
          <p id="incorrectInputText"></p>

          <button type="submit" id="submitData" name="submitData" className="loginbtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
