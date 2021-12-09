import React from "react";

const Task = ({ task, handleToggleCompleted, handleDelete }) => {
  return (
    <li className={task.isCompleted ? "completed" : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={() => handleToggleCompleted(task.id)}
        />
        <label>{task.title}</label>
        <button
          className="destroy"
          onClick={() => handleDelete(task.id)}
        ></button>
      </div>
    </li>
  );
};

export default Task;
