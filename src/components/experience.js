import Tasks from "./tasks";

function Experience(){
  return(
    <div>
      <label for="company">Company</label>
      <input type="text" className="company" name="company" size="10"/>      
      <label for="position">Position</label>
      <input type="text" className="position" name="position" size="10"/>      
      <label for="from">From</label>
      <input type="date" className="from" name="from" size="10"/>      
      <label for="until">Until</label>
      <input type="date" className="until" name="until" size="10"/>      
      <p>Tasks</p>
      <Tasks/>
    </div>
  )
}
export default Experience;
