// Import the functions you need from the SDKs you need
import { doc, getDoc, setDoc, query, collection, getDocs, where, updateDoc } from 'firebase/firestore';
import { db, auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import SetClassDropdown from './SetClassDropdown.js';
import FindMaxNum from './FindMaxNum';

export default function AddAssignment() {
  const [user, loading, error] = useAuthState(auth);

  function handleSubmit(e) {
    e.preventDefault();

    const editClass = async () => {
      const classRef = doc(db, 'classes', user.email);
      const classDoc = await getDoc(classRef);
      const classObject = classDoc.data();

      // Sets the new class name to be added
      let assignmentName = document.getElementById('addAssignment').value;
      let classEdited = document.getElementById('classesDropDown');
      let assignmentToBeAdded = classEdited.options[classEdited.selectedIndex].text;

      // // Sets the DO day of the week of the assignment to be added
      let doDayEdited = document.getElementById('dayDropDown');
      let doDayToBeAdded = doDayEdited.options[doDayEdited.selectedIndex].text;

      // // Sets the DUE day of the week of the assignment to be added
      let dueDayEdited = document.getElementById('DueDayDropDown');
      let dueDayToBeAdded = dueDayEdited.options[dueDayEdited.selectedIndex].text;

      // Finds the field associated with the value
      for (const [key, value] of Object.entries(classObject)) {
        if (value.Name == assignmentToBeAdded) {
          var assignmentNameUpdated = key;
        }
      }
      var assignmentIdList = Object.keys(classObject[assignmentNameUpdated].Assignments);

      // Finds last assignment number
      var maxAssignmentNum = FindMaxNum(assignmentIdList, 10);

      let newAssignmentName = 'assignment' + (maxAssignmentNum + 1);

      // Update document without changing any other fields
      updateDoc(doc(db, 'classes', user.email), {
        [`${[assignmentNameUpdated]}.Assignments.${[newAssignmentName]}`]: { Name: assignmentName, DoDate: doDayToBeAdded, DueDate: dueDayToBeAdded },
      });
    };
    editClass();
  }

  return (
    <div className="container add-assignment-div">
      <form id="add-assignment" onSubmit={handleSubmit}>
        <h2 className="add-assignment-label">Add Assignment</h2>
        <div className="float-left-right">
          <div className="float-left">
            <label htmlFor="classes" className="add-assignment-class-label">
              Class:
            </label>
            <SetClassDropdown id="classesDropDown" />
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
        <button type="submit" id="addAssignmentButton" name="addAssignmentButton" className="addAssignment-btn">
          Add Assignment
        </button>
      </form>
    </div>
  );
}
