import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CheckLogin } from "./CheckLogin";
import logo from "../images/dodatelogo.jpeg";
import Logout from "../pages/Logout";
import GetUserName from "../components/GetUserName";

export default function Navbar() {
  // var userName = GetUserName();
  // console.log(userName);
  var isLoggedIn = CheckLogin();
  var userName = GetUserName();
  console.log("outer nav" + userName);

  // Now I need to update the nav to have the user name in it

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt={"DoDate logo"} id={"logo"} />
      </Link>
      <ul>
        {/* <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/register">Register</CustomLink> */}
        <li className="hi">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="hi">
          <Link to={"/login"}>Login</Link>
        </li>
        <li className="hi">
          <Link to={"/register"}>Register</Link>
        </li>
        <button className={isLoggedIn ? "displayOnLoggedIn" : "doNotDisplayOnLoggedIn"} onClick={Logout}>
          Logout
        </button>
      </ul>
    </nav>
  );
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   const doNotShowOnLoggedIn = ["login", "register"];
//   const currentPathName = resolvedPath.pathname.substring(1);

//   var isLoggedInTemplate = "";
//   var isLoggedIn = CheckLogin();

//   if (isLoggedIn) {
//     isLoggedInTemplate = doNotShowOnLoggedIn.includes(currentPathName) ? "doNotDisplayOnLoggedIn" : "displayOnLoggedIn";
//   } else {
//     isLoggedInTemplate = "";
//   }

//   const isActiveTemplate = isActive ? "active" : "";
//   const classes = `${isActiveTemplate} ${isLoggedInTemplate}`;

//   return (
//     <li className={classes}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }
