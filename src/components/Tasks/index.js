import Task from "./Task";
export default function Tasks({
  tasks,
  removeTaskHandler,
  statusChangeHandler,
  resetTaskHandler,
}) {
  const doneCount = tasks.filter((task) => task.done).length;
  const undoneCount = tasks.filter((task) => !task.done).length;
  return (
    <section>
      <div className="tasks_status">
        {tasks.length <= 0 ? (
          <h3 className="noTasks">
            Unfortunately, there are no available tasks at the moment.{" "}
          </h3>
        ) : (
          <>
            <h3>Let's go through the list of tasks ({tasks.length})</h3>
            <p style={{fontSize: "25px"}}>
             - Completed Tasks ({doneCount}) - Open Tasks ({undoneCount})
            </p>
          </>
        )}
      </div>
      <div className="tasks">
        {tasks.length > 0 &&
          tasks.map((item) => {
            return (
              <Task
                key={item.id}
                {...item}
                statusChangeHandler={() => statusChangeHandler(item.id)}
                removeTaskHandler={() => removeTaskHandler(item.id)}
              />
            );
          })}
      </div>
      <div style={{ textAlign: "center", margin: "10px auto" }}>
        <button
          onClick={resetTaskHandler}
          disabled={tasks.length === 0}
          style={{ backgroundColor: "red" }}
        >
          Clear all tasks
        </button>
      </div>
    </section>
  );
}
