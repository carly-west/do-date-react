// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import SetClassDropdown from "./SetClassDropdown.js";

export default function OrganizeCheckboxDue(user) {
  // const [user, loading, error] = useAuthState(auth);

  const organizeCheckboxDue = async () => {
    // Class color info
    const userRef = doc(db, "users", user.email);
    const userDoc = await getDoc(userRef);
    const userObject = userDoc.data();
    const userColors = userObject.UserColors;

    const classRef = doc(db, "classes", user.email);
    const classDoc = await getDoc(classRef);
    const classObject = classDoc.data();
    var removeElements = document.querySelectorAll(".assignments");
    removeElements.forEach((item) => {
      item.remove();
    });

    // Display classes in days of the week
    for (const [outerKey, value] of Object.entries(classObject)) {
      for (const [key, assignmentValue] of Object.entries(value.Assignments)) {
        const dayOfWeekID = document.getElementById(assignmentValue.DoDate);
        const dayListItem = document.createElement("li");
        dayListItem.value = key;
        dayListItem.innerHTML = assignmentValue.Name;
        dayOfWeekID.appendChild(dayListItem);
        dayListItem.setAttribute("class", "class-color-" + value.Color + " assignments");

        for (const [keyColor, valueColor] of Object.entries(userColors)) {
          if (value.Color == keyColor) {
            dayListItem.style.color = valueColor;
          }
        }
        dayListItem.setAttribute("id", outerKey + "-" + assignmentValue.Name);
        dayListItem.setAttribute("value", outerKey + "-" + assignmentValue.Name);

        const dayOfWeekItem = document.getElementById(outerKey + "-" + assignmentValue.Name);
        const dayListCheck = document.createElement("input");
        dayOfWeekItem.appendChild(dayListCheck);
        dayListCheck.setAttribute("type", "checkbox");
        dayListCheck.setAttribute("name", "assignments");
        dayListCheck.setAttribute("value", outerKey + "-" + key);
      }
    }
  };
  if (user) {
    organizeCheckboxDue();
  }
}
