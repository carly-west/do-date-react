import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CheckLogin } from "./CheckLogin";
import logo from "../images/dodatelogo.jpeg";
import Logout from "../pages/Logout";
import GetUserName from "../components/GetUserName";

export default function Navbar() {
  // var userName = GetUserName();
  // console.log(userName);

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt={"DoDate logo"} id={"logo"} />
      </Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/register">Register</CustomLink>

        <button>Logout</button>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const doNotShowOnLoggedIn = ["login", "register"];
  const currentPathName = resolvedPath.pathname.substring(1);
  var isLoggedInTemplate = "";
  var isLoggedIn = CheckLogin();
  console.log("hi " + isLoggedIn);

  if (isLoggedIn) {
    isLoggedInTemplate = doNotShowOnLoggedIn.includes(currentPathName) ? "doNotDisplayOnLoggedIn" : "displayOnLoggedIn";
  } else {
    isLoggedInTemplate = "";
  }

  const isActiveTemplate = isActive ? "active" : "";
  // const isLoggedInTemplate = isLoggedIn ? "Yes" : "No";
  const classes = `${isActiveTemplate} ${isLoggedInTemplate}`;

  return (
    <li className={classes}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
