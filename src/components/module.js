import {useState} from "react";

function Module(props){
  const title = props.title;
  const [one,setOne] = useState('');
  const [two,setTwo] = useState('');
  const [three,setThree] = useState('');
  const [four,setFour] = useState('');

  switch(title){
    case "Certification":
      return(
        <li >
          <input type="text" className="certification" placeholder="School" size="10" value={one} onChange={(e)=>setOne(e.target.value)}  />
          <input type="text" className="certification" placeholder="Title" size="10" value={two} onChange={(e)=>setTwo(e.target.value)} />
          <input type="date" className="certification" placeholder="Date" size="10" value={three} onChange={(e)=>setThree(e.target.value)}/>
        </li>
      );
    case "Experience":
      return(
        <li>
          <input type="text" className="experience" placeholder="Company" size="10" value={one} onChange={(e)=>setOne(e.target.value)} />      
          <input type="text" className="experience" placeholder="Position" size="10" value={two} onChange={(e)=>setTwo(e.target.value)}/>      
          <input type="date" className="experience" placeholder="From" size="10" value={three} onChange={(e)=>setThree(e.target.value)}/>      
          <input type="date" className="experience" placeholder="Until" size="10" value={four} onChange={(e)=>setFour(e.target.value)}/>      
          <h3>Tasks</h3>
        </li>
      );
    case "General":
      return(
        <li>
          <input type="text" className="general" placeholder="Name" required size="10" value={one} onChange={(e)=>setOne(e.target.value)}/>
          <input type="tel" className="general" placeholder="Phone" required size="10" value={two} onChange={(e)=>setTwo(e.target.value)}/>
          <input type="email" className="general" placeholder="E-mail" required size="10" value={three} onChange={(e)=>setThree(e.target.value)}/>
        </li>
      );
    case "Task":
      return(
        <li>
          <input type="text" className="task" placeholder="Task" value={one} onChange={(e)=>setOne(e.target.value)}/>
        </li>
      ) ;  
    default:
      throw new Error(`Invalid module type`);
  }
}
 export default Module;
