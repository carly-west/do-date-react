import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { CheckLogin } from "./CheckLogin";
import logo from "../images/dodatelogo.jpeg";
import Logout from "../pages/Logout";
import GetUserName from "../components/GetUserName";

export default function Navbar() {
  var isLoggedIn = CheckLogin();
  console.log(isLoggedIn);

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
        <button onClick={Logout}>Logout</button>
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

  // if (isLoggedIn) {
  //   isLoggedInTemplate = doNotShowOnLoggedIn.includes(currentPathName) ? "doNotDisplayOnLoggedIn" : "displayOnLoggedIn";
  // }

  const isActiveTemplate = isActive ? "active" : "";
  // const isLoggedInTemplate = isLoggedIn ? "Yes" : "No";
  // const classes = `${isActiveTemplate} ${isLoggedInTemplate}`;
  const classes = `${isActiveTemplate}`;

  return (
    <li className={classes}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
