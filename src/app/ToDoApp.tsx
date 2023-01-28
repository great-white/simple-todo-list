import React from "react";
import NavBar from "../components/advanced/nav-bar/NavBar";
import { Routes, Route } from "react-router-dom";
import CreateNewToDoListPage from "../pages/new-todo-list/CreateNewToDoListPage";
import ExistingToDoListsPage from "../pages/existing-todo-list-page/ExistingToDoListsPage";
import RenderSingleToDoPage from "../pages/existing-todo-list-page/RenderSingleToDoPage";

type ToDoAppProps = {};

function ToDoApp(props: ToDoAppProps) {
  return (
    <div>
      <h1>ToDo App</h1>
      <NavBar />
      <Routes>
        <Route path="existing" element={<ExistingToDoListsPage />} />
        <Route path="existing/:listName" element={<RenderSingleToDoPage />} />
        <Route path="new" element={<CreateNewToDoListPage />} />
      </Routes>
    </div>
  );
}

export default ToDoApp;
