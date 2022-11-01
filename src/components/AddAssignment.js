// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import SetClassDropdown from "./SetClassDropdown.js";

export default function AddAssignment() {
  const [updateClassName, updateClass] = useState("");
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="container add-assignment-div">
      <form id="add-assignment">
        <h2 className="add-assignment-label">Add Assignment</h2>
        <div className="float-left-right">
          <div className="float-left">
            <label htmlFor="classes" className="add-assignment-class-label">
              Class:
            </label>
            <SetClassDropdown />

            <br />

            <div className="add-assignment-name">
              <label htmlFor="addAssignment">Name:</label>
              <input type="text" placeholder="Assignment" name="addAssignment" id="addAssignment" required />
            </div>
          </div>

          <div className="day-drop-down">
            <div className="float-right">
              <label htmlFor="addAssignment">Do Date:</label>
              <select name="dayDropDown" id="dayDropDown">
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>

              <div className="due-date">
                <label htmlFor="addAssignmentDue" id="due-date-title">
                  Due Date:
                </label>
                <select name="DueDayDropDown" id="DueDayDropDown">
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button type="button" id="addAssignmentButton" name="addAssignmentButton" className="addAssignment-btn">
          Add Assignment
        </button>
      </form>
    </div>
  );
}
