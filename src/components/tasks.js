import uniqid from 'uniqid'

function Tasks({tasks}){

  const renderList = tasks.map(task=><li key={uniqid()}>{task}</li>)

  return(
    <div>
      <ul>
        {renderList}
      </ul>
    </div>
  );
}
export default Tasks;
