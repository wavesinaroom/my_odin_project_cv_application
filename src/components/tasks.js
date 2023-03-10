function Tasks({tasks}){

  const renderList = tasks.map(task=><li>{task}</li>)

  return(
    <div>
      <ul>
        {renderList}
      </ul>
    </div>
  );
}
export default Tasks;
