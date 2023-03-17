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
          <label for="one">School</label>
          <input type="text" className="certification" name="one" size="10" value={one} onChange={e => setOne(e.target.value)}/>
          <label for="two">Title</label>
          <input type="text" className="certification" name="two" size="10" value={two} onChange={e=> setTwo(e.target.value)}/>
          <label for="three">Date</label>
          <input type="date" className="certification" name="three" size="10" value={three} onChange={e=> setThree(e.target.value)}/>
        </li>
      );
    case "Experience":
      return(
        <li>
          <label for="one">Company</label>
          <input type="text" className="company" name="one" size="10" value={one} onChange={e=>setOne(e.target.value)} />      
          <label for="two">Position</label>
          <input type="text" className="position" name="two" size="10" value={two} onChange={e=>setTwo(e.target.value)}/>      
          <label for="three">From</label>
          <input type="date" className="from" name="three" size="10" value={three} onchange={e=>setThree(e.target.value)}/>      
          <label for="four">Until</label>
          <input type="date" className="until" name="four" size="10" value={four} onChange={e=>setFour(e.target.value)}/>      
          <h3>Tasks</h3>
        </li>
      );
    case "General":
      return(
        <li>
          <label for="one">Candidate&apos;s name</label>
          <input type="text" className="name" name="one" size="10" value={one} onChange={e=>setOne(e.target.value)}/>
          <label for="two">Phone</label>
          <input type="tel" className="phone" name="two" size="10" value={two} onChange={e=>setTwo(e.target.value)}/>
          <label for="three">E-mail</label>
          <input type="email" className="e-mail" name="three" size="10"value={three} onChange={e=>setThree(e.target.value)}/>
        </li>
      );
    case "Task":
      return(
        <li>
          <input type="text" className="task" name="task" value={one} onChange={e=>setOne(e.target.value)}/>
        </li>
      ) ;  
    default:
      throw new Error(`Invalid module type`);
  }
}
 export default Module;
