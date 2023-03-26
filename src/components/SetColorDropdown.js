// Import the functions you need from the SDKs you need
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react';

export default function SetColorDropdown(props) {
  const [user] = useAuthState(auth);
  const setDropdown = async () => {
    const userRef = doc(db, 'users', user.email);
    const userDoc = await getDoc(userRef);
    const userObject = userDoc.data();
    const userColors = userObject.UserColors;

    if (userColors) {
      // Display colors in dropdown

      // Clears options so everything is only rendered once
      const selectAll = document.querySelectorAll('.colorDropDown option');
      selectAll.forEach((o) => o.remove());

      var selectAllColors = document.querySelectorAll('.colorDropDown');
      var length = selectAllColors.length;

      for (var i = 0; i < length; i++) {
        for (const [key, value] of Object.entries(userColors)) {
          const opt = document.createElement('option');
          opt.innerHTML = key;
          opt.setAttribute('value', key.toLowerCase());
          opt.setAttribute('id', key.toLowerCase());
          selectAllColors[i].appendChild(opt);
        }
      }
    }
  };

  //   Only call function if state renders that user is logged in
  if (user) {
    setDropdown();
  }
  return <select name="selectColor" id={props.id} className="colorDropDown"></select>;
}
