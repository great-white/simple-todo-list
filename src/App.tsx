import React from "react";
import "./App.css";
import CreateNewToDoListPage from "./page/create-new-todo-list/CreateNewToDoListPage";
import ExistingToDosPage from "./page/existingtodopages/ExistingToDosPage";
import ToDoApp from "./page/todo-app/ToDoApp";

function App() {
  localStorage.clear();
  return (
    <div className="App">
      <ToDoApp />
    </div>
  );
}

export default App;
