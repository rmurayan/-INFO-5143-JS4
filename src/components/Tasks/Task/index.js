export default function Task({ id , description, done ,changeStatusHander, removeTaskHander }) {

  return (
    <>
      <hr />
      <h3>Description : {description}</h3>
      <div>
        <label> <b> Id :</b> {id} </label>
      </div>

      <div>
        <label> <b>Status : </b> {done ? "Completed" : "Open"} </label>
      </div>

      <button onClick={changeStatusHander}>Change Status</button>
      <button onClick={removeTaskHander}>Remove Task</button>

    </>
  );
}
