// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc } from "firebase/firestore";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";

export default function ClassLegend() {
  const [user, loading, error] = useAuthState(auth);

  const classLegend = async () => {
    // Class info
    const classRef = doc(db, "classes", user.email);
    const classDoc = await getDoc(classRef);
    const classObject = classDoc.data();

    // Class color info
    const userRef = doc(db, "users", user.email);
    const userDoc = await getDoc(userRef);
    const userObject = userDoc.data();
    const userColors = userObject.UserColors;

    if (classObject) {
      // Display classes in legend
      const classLegend = document.getElementById("classList");

      // Clears options so everything is only rendered once
      const classLegendAll = document.querySelectorAll("#classList li");
      classLegendAll.forEach((o) => o.remove());

      for (const [key, value] of Object.entries(classObject)) {
        const listItem = document.createElement("li");
        listItem.value = key;
        listItem.innerHTML = value.Name;
        classLegend.appendChild(listItem);

        for (const [keyColor, valueColor] of Object.entries(userColors)) {
          if (value.Color == keyColor) {
            listItem.style.color = valueColor;
          }
        }
      }
    }
  };

  //   Only call function if state renders that user is logged in
  if (user) {
    classLegend();
  }

  return (
    <div id="class-legend" className="class-legend">
      <h3>Class Legend</h3>
      <ul id="classList"></ul>
    </div>
  );
}
