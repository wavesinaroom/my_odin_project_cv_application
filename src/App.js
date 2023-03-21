import './App.css';
import {useState } from "react";
import Module from "./components/module";
import Section from "./components/section";


function App() {
  const [markup,setMarkup] = useState('');

  return (
    <div className="app">
     <form id="main">
        <h1>CV application</h1>
        <Module title="General"/>
        <Section title="Education"/>
        <Section title="Work Experience"/>
       <button  
        type="submit" 
        onClick={()=>{
          setMarkup('');
          setMarkup(document.getElementById('root').innerHTML);
          document.getElementById('markup').hidden = false;
          document.getElementById('main').hidden = true;
         }}
        >Submit</button>
      </form>
      <div hidden id="markup">
        <button onClick={()=>{
          document.getElementById('markup').hidden = true;
          document.getElementById('html').innerHTML = '';
          document.getElementById('main').hidden = false;
          }}>Back</button>
        <p id="html">
          {markup}
        </p>
      </div>
    </div>
  );
}

export default App;
