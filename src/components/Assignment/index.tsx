import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import {useState} from 'react'

type Props = {
  id: string;
  assignment: string;
  completed: boolean;
  index: number,
  remove:(arg0:number)=>void;
  updateAssignment:(arg0:number, arg1:boolean)=>void;
  updateCounter:()=>void;
};
export function Assignment({ assignment, completed, updateAssignment, remove, index, updateCounter}: Props) {
  const [check, setCheck] = useState(false);
  function displayCheck(){
    setCheck(!check);
    if(!check){
      updateAssignment(index,true);
    }else{
      updateAssignment(index,false);
    }
    updateCounter();
  }
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}onClick={()=>displayCheck()}>
        {check==true &&
          <BsCheckCircleFill />
        }
        {
          check==false && 
          <div />
        }
      </button>

      <p className={check ? styles.textCompleted : ''}>{assignment}</p>

      <button className={styles.deleteButton} onClick={()=>remove(index)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
