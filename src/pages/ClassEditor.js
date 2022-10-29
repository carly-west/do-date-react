import AddClass from "../components/AddClass";

export default function ClassEditor() {
  return (
    <div>
      <h1>Class Editor</h1>
      <AddClass />

      <form id="add-class">
        <div className="edit-class">
          <h2>Edit Class</h2>
          <label htmlFor="classes">Class to Edit</label>
          <select name="classes" id="classesDropDown"></select>

          <label htmlFor="classNameEdit">New Class Name</label>
          <input type="text" name="classNameEdit" id="classNameEdit" required />

          <button type="button" id="editClass" name="createClass" className="createclass-btn">
            Edit Class
          </button>
        </div>
      </form>
    </div>
  );
}
