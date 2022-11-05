import ClassLegend from "../components/ClassLegend";
import AddAssignment from "../components/AddAssignment";
import Weekdays from "../components/Weekdays";

export default function AssignmentTracker() {
  return (
    <div>
      <AddAssignment />
      <ClassLegend />
      <Weekdays />
    </div>
  );
}
