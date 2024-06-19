import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { TAssignment } from "./types";

function App() {
  const [assignments, setAssignments] = useState<TAssignment[]>([]);
  function removeAssignment(key:number):void {
    setAssignments({
      ...assignments.slice(0,key),
      ...assignments.slice(key+1),
    });
  }
  function updateAssignment(key:number, status:boolean):void {

    for(let i=0; i<assignments.length; i++){
      if(i == key){
        assignments[i].completed=status;
      }
    }
  }
  return (
    <>
      <Header setAssignments={setAssignments}/>
      <Assignments assignments={assignments} remove={removeAssignment} updateAssignment={updateAssignment} />
    </>
  );
}

export default App;
