// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { useState } from "react";

export const LoginUser = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form data is ${username}`);
  };
};
