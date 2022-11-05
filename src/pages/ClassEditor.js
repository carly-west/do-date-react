import AddClass from "../components/AddClass";
import EditClass from "../components/EditClass";

export default function ClassEditor() {
  return (
    <div className="class-editor-body">
      <div className="class-editor-content">
        <h1>Class Editor</h1>
        <AddClass />
        <EditClass />
      </div>
    </div>
  );
}
