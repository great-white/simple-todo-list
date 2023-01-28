import React from "react";
import "./App.css";
import ToDoApp from "./app/ToDoApp";
import NavBar from "./components/advanced/nav-bar/NavBar";
import ExistingToDoListsPage from "./pages/existing-todo-list-page/ExistingToDoListsPage";
import SingleToDoListPage from "./pages/existing-todo-list-page/SingleToDoListPage";
import CreateNewToDoListPage from "./pages/new-todo-list/CreateNewToDoListPage";

function App() {
  return (
    <div className="App">
      {/* <SingleToDoListPage listName="temp" /> */}
      {/* <ExistingToDoListsPage /> */}
      <ToDoApp />
    </div>
  );
}

export default App;
