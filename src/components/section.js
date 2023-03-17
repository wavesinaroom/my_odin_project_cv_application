import React, { useState} from "react";
import uniqid from 'uniqid'
import Module from "./module";

export default function Section (props){
  const [components, setComponents] = useState([]);
  let component;

  function addComponent(title){
    switch(title){
      case "Education":
        component = <Module title="Certification" key={uniqid()}/>;
        break;
      case "Work":
        component = <Section title="Experience" key={uniqid()}/>;
        break; 
      case "Experience":
        component = <Module title = "Task" key={uniqid()}/>;
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
        <Module title="Experience"/>
        <div className="button-set">
          <button onClick={()=>{addComponent(props.title)}}>Add</button>
          <button onClick={()=>{removeComponent()}}>Remove</button>
        </div>
        <ul>
          {components}
        </ul>
      </div>
    );

  }else{
    return(
      <div className="section">
        <h1>{props.title}</h1>
        <div className="button-set">
          <button onClick={()=>{addComponent(props.title)}}>Add</button>
          <button onClick={()=>{removeComponent()}}>Remove</button>
        </div>
        <ul>
          {components}
        </ul>
      </div>
    );
  }
}

