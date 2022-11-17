import AddClass from "../components/AddClass";
import EditClass from "../components/EditClass";
import AddColor from "../components/AddColor";
import DeleteClass from "../components/DeleteClass";

export default function ClassEditor() {
  return (
    <div>
      <div className="class-editor-body">
        <div className="class-editor-content">
          <AddClass />
          <EditClass />
          <DeleteClass />
        </div>
      </div>
      <div className="class-editor-body">
        <div className="class-editor-content">
          <AddColor />
        </div>
      </div>
    </div>
  );
}
