import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
const Body = () => {
  const [color, setColor] = useState("#9900EF");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onHandleAddTask = () => {
    if (text === "") {
      return toast.error("Lütfen not alanını boş bırakmayınız!");
    }
    const data = {
      color,
      text,
    };
    dispatch(addTask(data));
    setText("");
  };

  return (
    <div className="body">
      <textarea
        className="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
        placeholder="Ne yapılması gerekiyor?"
      ></textarea>
      <div className="content">
        <div className="color-picker">
          <span
            style={{ backgroundColor: color }}
            className="color-info"
          ></span>
          <TwitterPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
        </div>
        <button className="btn" onClick={onHandleAddTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Body;
