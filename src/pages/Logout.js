import { useState } from "react";
import { db, auth, app } from "../components/firebase";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  auth.signOut();
  console.log("User signed out!");
  const navigate = useNavigate();
  // HOW TO USE ROUTER????
  navigate("/login");
}
