import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const Header = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");

  const onFormSubmit = (event) => {
    // Formun yenilenmesini engelliyorum.
    event.preventDefault();
    const task = {
      // Eklenen taskların unique bir degeri olması için uuid kütüphanesinden yararlandım. bu id'ye göre tamamlama ve silem islemleri yapılıyor.
      id: uuid(),
      title: value,
      isCompleted: false,
    };
    // Eklene task'ı state üzerinde güncelliyorum.
    setTasks([task, ...tasks]);
    setValue("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onFormSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
