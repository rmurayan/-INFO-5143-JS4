import React, { useState } from "react";
import InputHook from "../../Hooks/InputCustomHook.js";

export default function Form({ title, addNewTaskHandler }) {
  const {
    value: description,
    setValue: setDescription,
    handleInputChange: inputDescriptionChangeHandler,
  } = InputHook({ value: "" });

  const {
    value: status,
    setValue: setStatus,
    handleInputChange: inputStatusChangeHandler,
  } = InputHook({ value: "open" });
  const resetHandler = () => {
    setDescription("");
    setStatus("open");
  };
  const [descriptionIsEmpty, setDescriptionIsEmpty] = useState(false);

  const onSubmitHander = (event) => {
    event.preventDefault();
    if (description === "") {
      setDescriptionIsEmpty(true);
      return;
    }
    addNewTaskHandler(description, status);
    setDescription("");
    setStatus("open");
    setDescriptionIsEmpty(false);
  };

  return (
    <form onSubmit={onSubmitHander} className="formCon">
      <h2 style={{ textAlign: "center", fontSize: "35px", color: "green" }}>
        {title}
      </h2>
      <div className="input_form">
        <div className="text-input">
          <label htmlFor="description">
            <b>Description</b>
            <input
              type="text"
              name="description"
              id="description"
              maxLength={150}
              value={description}
              placeholder="Typing description in here"
              onChange={inputDescriptionChangeHandler}
            />
          </label>
        </div>
        <div className="text-input">
          <label htmlFor="status" className="select">
            <b>Status:</b>
            <select
              name="status"
              value={status}
              onChange={inputStatusChangeHandler}
            >
              <option value="open">Open</option>
              <option value="completed">Completed</option>
            </select>
          </label>
        </div>
        <button type="submit">Add</button>
        <button type="button" onClick={resetHandler}>
          Reset
        </button>
      </div>
      {descriptionIsEmpty && (
        <h2 style={{ color: "red" }}>** Enter a description **</h2>
      )}
    </form>
  );
}
