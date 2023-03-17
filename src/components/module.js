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
          <label for="school">School</label>
          <input type="text" className="certification" name="school" size="10" value={one} onChange={(e)=>setOne(e.target.value)}  />
          <label for="title">Title</label>
          <input type="text" className="certification" name="title" size="10" value={two} onChange={(e)=>setTwo(e.target.value)} />
          <label for="Date">Date</label>
          <input type="date" className="certification" name="date" size="10" value={three} onChange={(e)=>setThree(e.target.value)}/>
        </li>
      );
    case "Experience":
      return(
        <li>
          <label for="company">Company</label>
          <input type="text" className="company" name="company" size="10" value={one} onChange={(e)=>setOne(e.target.value)} />      
          <label for="position">Position</label>
          <input type="text" className="position" name="position" size="10" value={two} onChange={(e)=>setTwo(e.target.value)}/>      
          <label for="from">From</label>
          <input type="date" className="from" name="from" size="10" value={three} onChange={(e)=>setThree(e.target.value)}/>      
          <label for="until">Until</label>
          <input type="date" className="until" name="until" size="10" value={four} onChange={(e)=>setFour(e.target.value)}/>      
          <h3>Tasks</h3>
        </li>
      );
    case "General":
      return(
        <li>
          <label for="name">Candidate&apos;s name</label>
          <input type="text" className="name" name="name" required size="10" value={one} onChange={(e)=>setOne(e.target.value)}/>
          <label for="phone">Phone</label>
          <input type="tel" className="phone" name="phone" required size="10" value={two} onChange={(e)=>setTwo(e.target.value)}/>
          <label for="e-mail">E-mail</label>
          <input type="email" className="e-mail" name="e-mail" required size="10" value={three} onChange={(e)=>setThree(e.target.value)}/>
        </li>
      );
    case "Task":
      return(
        <li>
          <input type="text" className="task" name="task" value={one} onChange={(e)=>setOne(e.target.value)}/>
        </li>
      ) ;  
    default:
      throw new Error(`Invalid module type`);
  }
}
 export default Module;
