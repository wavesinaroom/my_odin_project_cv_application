import Tasks from "./tasks";
import {useState} from "react";
import uniqid from "uniqid";

function Experience(){
  let [tasks, setTasks] = useState(Array(0));
  const [description, setDescription] = useState('');
  
  function addTask(){
    setDescription('');
    setTasks([...tasks, {id: uniqid(), description:description}])
  }
  return(
    <div>
      <label for="company">Company</label>
      <input type="text" className="company" name="company" size="10"/>      
      <label for="position">Position</label>
      <input type="text" className="position" name="position" size="10"/>      
      <label for="from">From</label>
      <input type="date" className="from" name="from" size="10"/>      
      <label for="until">Until</label>
      <input type="date" className="until" name="until" size="10"/>      
      <div>
        <label for="description">Tasks</label>
        <input
          value={description}
          onChange={e=>setDescription(e.target.value)}
          type="text" 
          className="tasks" 
          name="description" 
          size="10"/>      
        <button className="tasks" onClick={()=>{addTask()}}>Add Task</button>
        <Tasks tasks={tasks}/>
      </div>
    </div>
  )
}
export default Experience;
