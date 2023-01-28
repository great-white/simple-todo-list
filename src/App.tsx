import React from "react";
import "./App.css";
import NavBar from "./components/advanced/nav-bar/NavBar";
import SingleToDoListPage from "./pages/existing-todo-list-page/SingleToDoListPage";

function App() {
  return (
    <div className="App">
      <SingleToDoListPage listName="temp" />
    </div>
  );
}

export default App;
