import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CheckLogin } from "./CheckLogin";
import logo from "../images/dodate-logo.png";
import Logout from "../pages/Logout";

import { doc, getDoc, getFirestore, query, collection, getDocs, where } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  // var isLoggedIn = CheckLogin();
  // var userName = GetUserName();

  var isLoggedIn;
  var userName = "not named";

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  var userAuthState = useAuthState(auth)[0];

  if (userAuthState) {
    isLoggedIn = true;
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("email", "==", user?.email));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserName();
  } else {
    isLoggedIn = false;
  }

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt={"DoDate logo"} id={"logo"} />
      </Link>
      <ul>
        <li className={isLoggedIn ? "display" : "doNotDisplay"}>
          <Link to={"/AssignmentTracker"}>Assignment Tracker</Link>
        </li>
        <li className={isLoggedIn ? "display" : "doNotDisplay"}>
          <Link to={"/classEditor"}>Class Editor</Link>
        </li>
        <li className={isLoggedIn ? "doNotDisplay" : "display"}>
          <Link to={"/login"}>Login</Link>
        </li>
        <li className={isLoggedIn ? "doNotDisplay" : "display"}>
          <Link to={"/register"}>Register</Link>
        </li>

        <li className={isLoggedIn ? "display" : "doNotDisplay"}>
          <Link to={"/userPage"}>{name}</Link>
        </li>
        <li className={isLoggedIn ? "display logoutButton" : "doNotDisplay"} onClick={Logout}>
          <Link to={"/login"}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
}
