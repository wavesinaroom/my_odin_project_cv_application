import './App.css';
import {useState } from "react";
import Module from "./components/module";
import Section from "./components/section";


function App() {
  const [markup,setMarkup] = useState('');

  return (
    <div className="app">
     <form id="main">
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
        <article id="html">
          {markup}
        </article>
      </div>
    </div>
  );
}

export default App;
