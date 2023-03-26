// Import the functions you need from the SDKs you need
import { auth } from './firebase.js';
import { updatePassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditUserPassword() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newPassword = document.getElementById('newPassword').value;
    console.log(newPassword);

    updatePassword(user, newPassword)
      .then(() => {
        // Update successful.
        console.log('update successful');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('unsuccessful password reset');
        console.log(errorMessage);
        console.log(errorCode);
        alert('Please login again');
        return navigate('/login');
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Password</h2>

      <label>New Password</label>
      <input type="password" required />

      <label>Repeat Password</label>
      <input type="password" id="newPassword" required />

      <button type="submit" id="submitData" name="submitData" className="loginbtn">
        Update Password
      </button>
    </form>
  );
}
