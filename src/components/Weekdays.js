// Import the functions you need from the SDKs you need

import { db, auth, app } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import RemoveAssignment from "./RemoveAssignment";
import OrganizeCheckboxDue from "./OrganizeCheckboxDue.js";

export default function Weekdays() {
  const [user, loading, error] = useAuthState(auth);

  //   Only call function if state renders that user is logged in
  if (user) {
    OrganizeCheckboxDue(user);
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
