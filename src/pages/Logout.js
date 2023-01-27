import { db, auth, app } from "../components/firebase";

export default function Logout() {
  auth.signOut();
  console.log("User signed out!");
}
