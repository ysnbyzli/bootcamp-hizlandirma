import React from "react";
import { getContrast } from "../utils/helper";
const TaskItem = ({ task: { color, text } }) => {
  return (
    <div className="task" style={{ backgroundColor: color }}>
      <p style={{ color: getContrast(color) }}>{text}</p>
    </div>
  );
};

export default TaskItem;
