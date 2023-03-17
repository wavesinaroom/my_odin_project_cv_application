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
          <input type="text" className="certification" placeholder="school" size="10" value={one} onChange={(e)=>setOne(e.target.value)}  />
          <input type="text" className="certification" placeholder="title" size="10" value={two} onChange={(e)=>setTwo(e.target.value)} />
          <input type="date" className="certification" placeholder="date" size="10" value={three} onChange={(e)=>setThree(e.target.value)}/>
        </li>
      );
    case "Experience":
      return(
        <li>
          <input type="text" className="experience" placeholder="company" size="10" value={one} onChange={(e)=>setOne(e.target.value)} />      
          <input type="text" className="experience" placeholder="position" size="10" value={two} onChange={(e)=>setTwo(e.target.value)}/>      
          <input type="date" className="experience" placeholder="from" size="10" value={three} onChange={(e)=>setThree(e.target.value)}/>      
          <input type="date" className="experience" placeholder="until" size="10" value={four} onChange={(e)=>setFour(e.target.value)}/>      
          <h3>Tasks</h3>
        </li>
      );
    case "General":
      return(
        <li>
          <input type="text" className="general" placeholder="name" required size="10" value={one} onChange={(e)=>setOne(e.target.value)}/>
          <input type="tel" className="general" placeholder="phone" required size="10" value={two} onChange={(e)=>setTwo(e.target.value)}/>
          <input type="email" className="general" placeholder="e-mail" required size="10" value={three} onChange={(e)=>setThree(e.target.value)}/>
        </li>
      );
    case "Task":
      return(
        <li>
          <input type="text" className="task" placeholder="task" value={one} onChange={(e)=>setOne(e.target.value)}/>
        </li>
      ) ;  
    default:
      throw new Error(`Invalid module type`);
  }
}
 export default Module;
