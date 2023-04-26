import Task from "./Task";

const Tasks = ({tasks, onDelete}) => {

  return (
    <>
      {tasks.map((task) => {
        // return <h3 key={task.id}>{task.text}</h3>
        return <Task key={task.id} task={task} onDelete={onDelete}/>
      })}
      {/* {tasks.map((task) => (<h3 key={task.id}>{task.name}</h3>))} */}
    </>
  );
};

export default Tasks;
