import uniqid from 'uniqid'
import {useState} from "react";

function Module(props){
  const [values,setValues] = useState([])
  console.log(values)
  const title = props.title;

  switch(title){
    case "Certification":
      return(
        <li key={uniqid()}>
          <label for="school">School</label>
          <input id="module" type="text" className="certification" name="school" size="10"  />
          <label for="title">Title</label>
          <input type="text" className="certification" name="title" size="10" />
          <label for="Date">Date</label>
          <input type="date" className="certification" name="date" size="10" />
        </li>
      );
    case "Experience":
      return(
        <li key={uniqid()}>
          <label for="company">Company</label>
          <input type="text" className="company" name="company" size="10" />      
          <label for="position">Position</label>
          <input type="text" className="position" name="position" size="10"/>      
          <label for="from">From</label>
          <input type="date" className="from" name="from" size="10"/>      
          <label for="until">Until</label>
          <input type="date" className="until" name="until" size="10"/>      
          <h3>Tasks</h3>
        </li>
      );
    case "General":
      return(
        <li key={uniqid()}>
          <label for="name">Candidate&apos;s name</label>
          <input type="text" className="name" name="name" required size="10"/>
          <label for="phone">Phone</label>
          <input type="tel" className="phone" name="phone" required size="10"/>
          <label for="e-mail">E-mail</label>
          <input type="email" className="e-mail" name="e-mail" required size="10"/>
        </li>
      );
    case "Task":
      return(
        <li key={uniqid()}>
          <input type="text" className="task" name="task" />
        </li>
      ) ;  
    default:
      throw new Error(`Invalid module type`);
  }
}
 export default Module;
