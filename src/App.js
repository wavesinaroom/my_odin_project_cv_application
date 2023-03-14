import {useState} from 'react';
import {renderToStaticMarkup} from 'react-dom/server'
import General from "./components/general";
import Section from "./components/section";

function App() {
  const [render,setRender] = useState('');

  return (
    <>
      <General/>
      <Section title="Education"/>
      <Section title="Work"/>
      <input type="submit" value="submit" onClick={()=>setRender(renderToStaticMarkup(<App/>))}/>
      {render}
    </>
  );
}

export default App;
