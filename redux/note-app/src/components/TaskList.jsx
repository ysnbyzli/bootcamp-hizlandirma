import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredTasks } from "../store/taskSlice";
import TaskItem from "./TaskItem";
const TaskList = () => {
  const tasks = useSelector(selectFilteredTasks);
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
