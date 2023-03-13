import React, { useState} from "react";
import Certification from "./certification";
import Experience from "./experience";
import Modules from "./modules";

export default function Section (props){
  const [components, setComponents] = useState([]);
  const [component, setComponent] = useState();

  function addComponent(title){
    console.log(title)
    switch(title){
      case "Education":
        setComponent(<Certification/>);
        break;
      case "Work":
        setComponent(<Experience/>);
        break; 
      default:
        throw new Error (`Invalid panel type`);
    }

    setComponents([...components, component]);
  }


  function removeComponent(){
    setComponents([...components.slice(0, components.length-1)])
  }

    return(
      <div className="section">
        <h1>{props.title}</h1>
        <button onClick={()=>{addComponent(props.title)}}>Add</button>
        <button onClick={()=>{removeComponent()}}>Remove</button>
        <Modules modules={components}/>
      </div>
    );
}

