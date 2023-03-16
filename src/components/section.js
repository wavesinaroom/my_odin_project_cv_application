import React, { useState} from "react";
import Module from "./module";

export default function Section (props){
  const [components, setComponents] = useState([]);
  let component;

  function addComponent(title){
    switch(title){
      case "Education":
        component = <Module title="Certification"/>;
        break;
      case "Work":
        component = <Section title="Experience"/>;
        break; 
      case "Experience":
        component = <Module title = "Task"/>;
        break;
      default:
        throw new Error (`Invalid panel type`);
    }

    setComponents([...components, component]);
  }


  function removeComponent(){
    setComponents([...components.slice(0, components.length-1)])
  }

  if(props.title === "Experience"){

    return(
        <div className="section">
          <h1>{props.title}</h1>
          <Module title="Experience"/>
          <button onClick={()=>{addComponent(props.title)}}>Add</button>
          <button onClick={()=>{removeComponent()}}>Remove</button>
          <ul>
            {components}
          </ul>
        </div>
    );

  }else{
    return(
      <>
        <div className="section">
          <h1>{props.title}</h1>
          <button onClick={()=>{addComponent(props.title)}}>Add</button>
          <button onClick={()=>{removeComponent()}}>Remove</button>
          <ul>
            {components}
          </ul>
        </div>
      </>
    );
  }
}

