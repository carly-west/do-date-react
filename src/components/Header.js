// import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import { CheckLogin } from "./CheckLogin";
// import logo from "../images/dodatelogo.jpeg";
// import Logout from "../pages/Logout";
// import { db, auth, app } from "./firebase.js";

// import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// export default function Navbar() {
//   var isLoggedIn = CheckLogin();
//   console.log(isLoggedIn);
//   console.log("header");

//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         <img src={logo} alt={"DoDate logo"} id={"logo"} />
//       </Link>
//       <ul>
//         <CustomLink to="/pricing">Pricing</CustomLink>
//         <CustomLink to="/about">About</CustomLink>
//         <CustomLink to="/login">Login</CustomLink>
//         <CustomLink to="/register">Register</CustomLink>
//         <button className={isLoggedIn ? "displayOnLoggedIn" : "doNotDisplayOnLoggedIn"} onClick={Logout}>
//           Logout
//         </button>
//       </ul>
//     </nav>
//   );
// }

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log("is logged in");
//       // var isLoggedIn = CheckLogin();
//       // console.log(isLoggedIn);

//       const doNotShowOnLoggedIn = ["login", "register"];
//       const currentPathName = resolvedPath.pathname.substring(1);
//       var isLoggedInTemplate = "";

//       isLoggedInTemplate = doNotShowOnLoggedIn.includes(currentPathName) ? "doNotDisplayOnLoggedIn" : "displayOnLoggedIn";

//       const isActiveTemplate = isActive ? "active" : "";
//       const classes = `${isActiveTemplate} ${isLoggedInTemplate}`;

//       return (
//         <li className={classes}>
//           <Link to={to} {...props}>
//             {children}
//           </Link>
//         </li>
//       );
//     } else {
//       console.log("not logged in");
//       console.log("is logged in");

//       const doNotShowOnLoggedOut = ["logout"];
//       const currentPathName = resolvedPath.pathname.substring(1);
//       var isLoggedInTemplate = "";

//       isLoggedInTemplate = doNotShowOnLoggedOut.includes(currentPathName) ? "doNotDisplayOnLoggedIn" : "displayOnLoggedIn";
//       console.log(isLoggedInTemplate);

//       const isActiveTemplate = isActive ? "active" : "";
//       const classes = `${isActiveTemplate} ${isLoggedInTemplate}`;

//       return (
//         <li className={classes}>
//           <Link to={to} {...props}>
//             {children}
//           </Link>
//         </li>
//       );
//     }
//   });
// }
