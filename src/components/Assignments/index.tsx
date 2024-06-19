import { TAssignment } from "../../types";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: TAssignment[];
  remove:(arg0:number)=>void;
  updateAssignment:(arg0:number, arg1:boolean)=>void;
  updateCounter:()=>void;
};
export function Assignments({ assignments, remove, updateAssignment, updateCounter }: Props) {
  let counter = 0;
  const assignmentList = assignments.map((assignment) =>
  <Assignment key={counter++} assignment={assignment.task} remove={remove} index={counter} updateAssignment={updateAssignment} completed={assignment.completed} id={assignment.id} updateCounter={updateCounter}/>);
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{assignments.filter(assignment => assignment.completed).length} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignmentList}
      </div>
    </section>
  );
}
