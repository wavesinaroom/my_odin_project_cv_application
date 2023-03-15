import {useState} from "react";
import Module from "./components/module";
import Section from "./components/section";


function App() {
  const [render,setRender] = useState('');
  const [isHTML,setIsHTML] = useState(false);

  function DefaultRender(){
    return(
      <form>
        <Module title="General"/>
        <Section title="Education"/>
        <Section title="Work"/>
        <input 
          type="submit" 
          value="submit" 
          onClick={()=>{
            getInnerHTML();
            setIsHTML(true)}}/>
      </form>
    );
  } 

  function getInnerHTML(){
    setRender(document.getElementById('root').innerHTML);
  }
  return (
    <>
    {!isHTML && 
      <DefaultRender/>
    }
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
