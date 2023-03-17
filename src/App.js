import './App.css';
import {useState } from "react";
import Module from "./components/module";
import Section from "./components/section";


function App() {
  const [markup,setMarkup] = useState('');

  return (
    <>
     <form id="main">
        <Module title="General"/>
        <Section title="Education"/>
        <Section title="Work"/>
       <input  
        type="submit" 
        value="submit" 
        onClick={()=>{
          setMarkup('');
          setMarkup(document.getElementById('root').innerHTML);
          document.getElementById('markup').hidden = false;
          document.getElementById('main').hidden = true;
         }}
        />
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
    </>
  );
}

export default App;
