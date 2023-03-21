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
        <li className="certification" >
          <input type="text" placeholder="School" value={one} onChange={(e)=>setOne(e.target.value)}  />
          <input type="text" placeholder="Title"  value={two} onChange={(e)=>setTwo(e.target.value)} />
          <input type="date" placeholder="Date"  value={three} onChange={(e)=>setThree(e.target.value)}/>
        </li>
      );
    case "Experience":
      return(
        <li className="experience">
          <input type="text" placeholder="Company"  value={one} onChange={(e)=>setOne(e.target.value)} />      
          <input type="text" placeholder="Position"  value={two} onChange={(e)=>setTwo(e.target.value)}/>      
          <input type="date" placeholder="From"  value={three} onChange={(e)=>setThree(e.target.value)}/>      
          <input type="date" placeholder="Until"  value={four} onChange={(e)=>setFour(e.target.value)}/>      
          <h3>Tasks</h3>
        </li>
      );
    case "General":
      return(
        <li className="general">
          <input type="text" placeholder="Name" required value={one} onChange={(e)=>setOne(e.target.value)}/>
          <input type="tel" placeholder="Phone" required value={two} onChange={(e)=>setTwo(e.target.value)}/>
          <input type="email" placeholder="E-mail" required value={three} onChange={(e)=>setThree(e.target.value)}/>
        </li>
      );
    case "Task":
      return(
        <li className="task">
          <input type="text" placeholder="Task" value={one} onChange={(e)=>setOne(e.target.value)}/>
        </li>
      ) ;  
    default:
      throw new Error(`Invalid module type`);
  }
}
 export default Module;
