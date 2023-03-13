import uniqid from 'uniqid'

function Modules({modules}){
  const renderList = modules.map(module=><li key={uniqid()}>{module}</li>)

  return(
    <div>
      <ul>
        {renderList}
      </ul>
    </div>
  );
}
export default Modules;
