import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import { taskData } from "./data";
import uuid from "react-uuid";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(taskData);

  const resetTaskHandler = () => {
    setTasks([]);
  };

  const statusChangeHandler = (id) => {
    setTasks((preTasks) => {
      return preTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      );
    });
  };
  const removeTaskHandler = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const addNewTaskHandler = (description, status) => {
    console.log("status "+ status)
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: uuid(),
        description: description,
        done: status === "open" ? false : true,
      },
    ]);
  };

  return (
    <>
      <Header />
      <Tasks 
        tasks={tasks}
        removeTaskHandler={removeTaskHandler}
        statusChangeHandler={statusChangeHandler}
        resetTaskHandler={resetTaskHandler}
      />
      <Form 
      title={"Add a new task"} 
      addNewTaskHandler={addNewTaskHandler} />
    </>
  );
}

export default App;
