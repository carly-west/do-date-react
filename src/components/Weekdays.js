// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import RemoveAssignment from "./RemoveAssignment";

export default function Weekdays() {
  const [user, loading, error] = useAuthState(auth);

  const addClasses = async () => {
    const classRef = doc(db, "classes", user.email);
    const classDoc = await getDoc(classRef);
    const classObject = classDoc.data();

    if (classObject) {
      // Clear all so that there aren't doubles
      const collection = document.querySelectorAll(".weekdayUl");
      for (let i = 0; i < collection.length; i++) {
        collection[i].innerHTML = "";
      }

      // Display classes in days of the week
      for (const [outerKey, value] of Object.entries(classObject)) {
        for (const [key, assignmentValue] of Object.entries(value.Assignments)) {
          const dayOfWeekID = document.getElementById(assignmentValue.DoDate);
          const dayListItem = document.createElement("li");

          dayListItem.value = key;
          dayListItem.innerHTML = assignmentValue.Name;

          dayOfWeekID.appendChild(dayListItem);
          dayListItem.setAttribute("class", "class-color-" + value.Color + " assignments");
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
    }
  };

  //   Only call function if state renders that user is logged in
  if (user) {
    addClasses();
  }

  return (
    <div>
      <form>
        <div className="week-layout">
          <div className="weekday" id="mondayDiv">
            <h2 className="dayOfWeekTitle">Monday</h2>
            <ul id="Monday" className="weekdayUl"></ul>
          </div>
          <div className="weekday" id="tuesdayDiv">
            <h2 className="dayOfWeekTitle">Tuesday</h2>
            <ul id="Tuesday" className="weekdayUl"></ul>
          </div>
          <div className="weekday" id="wednesdayDiv">
            <h2 className="dayOfWeekTitle">Wednesday</h2>
            <ul id="Wednesday" className="weekdayUl"></ul>
          </div>
          <div className="weekday" id="thursdayDiv">
            <h2 className="dayOfWeekTitle">Thursday</h2>
            <ul id="Thursday" className="weekdayUl"></ul>
          </div>
          <div className="weekday" id="fridayDiv">
            <h2 className="dayOfWeekTitle">Friday</h2>
            <ul id="Friday" className="weekdayUl"></ul>
          </div>
          <div className="weekday" id="saturdayDiv">
            <h2 className="dayOfWeekTitle">Saturday</h2>
            <ul id="Saturday" className="weekdayUl"></ul>
            <h2 className="dayOfWeekTitle" id="sunday-label">
              Sunday
            </h2>
            <ul id="Sunday"></ul>
          </div>
        </div>

        <button type="button" onClick={() => RemoveAssignment(user)} id="removeAssignmentBtn" name="removeAssignmentButton" className="remove-assignment-btn">
          Remove Assignments
        </button>
      </form>
    </div>
  );
}
