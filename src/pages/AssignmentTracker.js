import ClassLegend from "../components/ClassLegend";
import AddAssignment from "../components/AddAssignment";
import Weekdays from "../components/Weekdays";
import OrganizeCheckbox from "../components/OrganizeCheckbox";

export default function AssignmentTracker() {
  return (
    <div>
      <OrganizeCheckbox />

      <AddAssignment />
      <ClassLegend />
      <Weekdays />
    </div>
  );
}
