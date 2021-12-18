import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Body from "./components/Body";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <TaskList />
      <ToastContainer />
    </div>
  );
}

export default App;
