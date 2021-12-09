import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  // activeCategory state'ine göre kosullu render islemi. Componentlere tasks state'i yerine filteredList gönderiliyor.
  const filteredList =
    activeCategory === "All"
      ? tasks
      : activeCategory === "Active"
      ? tasks.filter((task) => task.isCompleted !== true)
      : tasks.filter((task) => task.isCompleted !== false);

  // Task tamamla fonksiyonu
  const handleToggleCompleted = (id) => {
    // Gelen id'ye göre task'ı bulup geri dönderir.
    const updatedTask = tasks.find((task) => task.id === id);
    // Task'ın isCompleted durumunu bir önceki durumunun tersi yapar.
    updatedTask.isCompleted = !updatedTask.isCompleted;
    // Güncellenen taskı state içerisinde yenisi ile değiştirir.
    const newTasks = tasks.map((task) => (task.id === id ? updatedTask : task));
    // State'i günceller.
    setTasks(newTasks);
  };

  // Task silme fonksiyonu
  const handleDelete = (id) => {
    // Gelen id'ye göre state'i filtreler
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Tüm taskları temizleme fonksiyonu
  const handleClear = () => {
    // Task state'ni boş bir diziye çevirir.
    setTasks([]);
  };

  return (
    <section className="todoapp">
      <Header setTasks={setTasks} tasks={tasks} />
      <Main
        filteredList={filteredList}
        tasks={tasks}
        handleToggleCompleted={handleToggleCompleted}
        handleDelete={handleDelete}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
        handleClear={handleClear}
      />
    </section>
  );
}

export default App;
