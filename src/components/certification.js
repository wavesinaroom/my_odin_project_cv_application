import uniqid from 'uniqid'
function Certification(){
  return(
    <div key={uniqid()}>
      <label for="school">School</label>
      <input type="text" className="school" name="school" size="10"/>
      <label for="title">Title</label>
      <input type="text" className="title" name="school" size="10"/>
      <label for="Date">Date</label>
      <input type="date" className="date" name="date" size="10"/>
    </div>
  );
}
 export default Certification;
