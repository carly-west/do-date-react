// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc } from 'firebase/firestore';
import { db, auth, app } from './firebase.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function RegisterUser() {
  var firstName = document.getElementById('firstName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('psw').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('created user!');

      // Add user to database
      setDoc(doc(db, 'users', user.email), {
        email: user.email,
        // Capitalizes first letter of name
        name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
      });

      return <Navigate to="/classEditor" />;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('unsuccessful creation');

      return <Navigate to="/login" />;
    });
}
