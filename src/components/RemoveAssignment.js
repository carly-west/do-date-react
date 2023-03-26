import { db } from './firebase.js';
import { doc, deleteField, updateDoc } from 'firebase/firestore';

export default function RemoveAssignment(user) {
  const editClass = async () => {
    if (user) {
      var checkedAssignemnts = document.querySelectorAll('input[name="assignments"]:checked');
      let checkedAssignmentsArray = [];

      // Adds all checked assignmenst to an array and deletes the ones that are checked
      checkedAssignemnts.forEach((checkbox) => {
        checkedAssignmentsArray.push(checkbox.value);
        var checkboxValue = checkbox.value;
        var classId = checkboxValue.substr(0, checkboxValue.indexOf('-'));
        var assignmentId = checkboxValue.substring(checkboxValue.indexOf('-') + 1);

        // Update document without changing any other fields
        updateDoc(doc(db, 'classes', user.email), {
          [`${[classId]}.Assignments.${[assignmentId]}`]: deleteField(),
        });
      });
    }
  };
  if (user) {
    editClass();
  }
}
