import React from "react";
import Task from "./Task";

const List = ({ handleToggleCompleted, handleDelete, filteredList }) => {
  return (
    <ul className="todo-list">
      {filteredList.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleToggleCompleted={handleToggleCompleted}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default List;
