import { taskData } from "../../data";
import Task from "./Task";
import { useState } from "react";
export default function Tasks() {
  const onClearTaskHander = () => {
    setTask([]);
  };
  const handleStatusClick = (id) => {
    setTask((preTasks) => {
      return preTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      );
    });
  }
  const removeTaskHander = (id)=>{
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const [tasksList, setTask] = useState(taskData);
  return (
    <>
      {tasksList.length <= 0 ? (
        <h1>Unfortunately, there are no available tasks at the moment. </h1>
      ) : (
        <h1>Let's go through the list of tasks :</h1>
      )}

      {tasksList.length > 0 &&
        tasksList.map((item) => {
          return (
            <Task key={item.id}
            {...item} 
             changeStatusHander = {()=> handleStatusClick(item.id)}
            removeTaskHander = {()=> removeTaskHander(item.id)} />
          );
        })}
      <hr />
      <button 
      onClick={onClearTaskHander} 
      disabled={tasksList.length === 0}
      >
      Clear all tasks
      </button>
    </>
  );
}
