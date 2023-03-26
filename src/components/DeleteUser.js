// Import the functions you need from the SDKs you need
// import { Link, Navigate } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

import { auth } from './firebase.js';
import { deleteUser } from 'firebase/auth';

export default function DeleteUser() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const currentUser = auth.currentUser;

    deleteUser(currentUser)
      .then(() => {
        // User deleted.
        console.log('Account Deleted');
        Navigate('/Register', { replace: true });
      })
      .catch((error) => {
        // An error ocurred
        // ...
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Account Unable to be Deleted');

        console.log(errorMessage);
        console.log(errorCode);
        alert('Please login again');
        return navigate('/login');
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Delete Account</h2>

      <button type="submit" id="submitData" name="submitData" className="loginbtn">
        Delete Account
      </button>
    </form>
  );
}
