import React from "react";
import { useDispatch } from "react-redux";
import { searchToTasks } from "../store/taskSlice";

const Header = () => {
  const dispatch = useDispatch();

  const onHandleChange = ({ target }) => {
    dispatch(searchToTasks(target.value));
  };

  return (
    <div>
      <h1 className="title">Notes App</h1>
      <input
        type="text"
        className="search"
        onChange={onHandleChange}
        placeholder="Ara.."
      />
    </div>
  );
};

export default Header;
