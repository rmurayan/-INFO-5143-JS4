export default function Task({
  id,
  description,
  done,
  statusChangeHandler,
  removeTaskHandler,
}) {
  return (
    <div className="task">
      <h3 className="task_description">Description : {description}</h3>
      <div>
        <label>
          <b> Id :</b> {id}{" "}
        </label>
      </div>

      <div>
        <label>
          <b>Status : </b> 
          <span className={done ? "statusComplete" : "statusOpen"}>
          {done ? "Completed" : "Open"}
          </span>
        </label>
      </div>
      <div className="button_group">
        <button onClick={statusChangeHandler}>Change Status</button>
        <button onClick={removeTaskHandler}>Remove Task</button>
      </div>
    </div>
  );
}
