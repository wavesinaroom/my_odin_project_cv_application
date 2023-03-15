import {useState} from "react";

function Certification(){
  const [content,setContent] = useState('')
  function handleChange(event){
    setContent(event.target.value);
  }
  return(
    <>
      <label for="school">School</label>
      <input type="text" className="school" name="school" size="10" value={content} onChange={handleChange}/>
      <label for="title">Title</label>
      <input type="text" className="title" name="school" size="10"/>
      <label for="Date">Date</label>
      <input type="date" className="date" name="date" size="10"/>
    </>
  );
}
 export default Certification;
