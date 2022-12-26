import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import TodoList from "./components/todolist";

function App() {
  return (
    <div className="todo-app">
      <TodoList/>
    </div>
  );
}

export default App;
