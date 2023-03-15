import {useState} from "react";
import General from "./components/general";
import Section from "./components/section";

function App() {
  const [render,setRender] = useState('');
  const [isHTML,setIsHTML] = useState(false);
  function getInnerHTML(){
    setRender(document.getElementById('root').innerHTML);
  }
  return (
    <>
    {!isHTML && 
      <form>
        <General/>
        <Section title="Education"/>
        <Section title="Work"/>
        <input 
          type="submit" 
          value="submit" 
          onClick={()=>{
            getInnerHTML();
            setIsHTML(true)}}/>
      </form>}
    {isHTML && 
      <div>
        <button onClick={()=>setIsHTML(false)}>Edit</button>
        <article>
          {render}
        </article>
      </div>}
    </>
  );
}

export default App;
