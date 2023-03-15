import {useState} from "react";
import General from "./components/general";
import Section from "./components/section";

function App() {
  let render;
  const [isHTML,setIsHTML] = useState(false);
  function getInnerHTML(){
    render = document.getElementById('root').innerHTML;
    console.log(render);
  }
  return (
    <>
    {!isHTML && 
      <form>
        <General/>
        <Section title="Education"/>
        <Section title="Work"/>
        <input type="submit" value="submit" onClick={()=>setIsHTML(true)}/>
      </form>}
    {isHTML && 
      <div>
        <button onClick={()=>setIsHTML(false)}>Edit</button>
        <article>
          yo
        </article>
      </div>}
    </>
  );
}

export default App;
