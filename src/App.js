import {useState} from "react";
import Module from "./components/module";


function App() {
  const [render,setRender] = useState('');
  const [isHTML,setIsHTML] = useState(false);

  function DefaultRender(){
    return(
      <form>
        <Module title="General"/>
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
