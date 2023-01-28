import React, { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateNewToDoListPage from "../create-new-todo-list/CreateNewToDoListPage";
import ExistingToDosPage from "../existingtodopages/ExistingToDosPage";
import { RenderSingleToDoPage } from "../existingtodopages/RenderSingleToDoPage";
import NavBar from "./NavBar";

export default class ToDoApp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <hr />
        <Routes>
          <Route index element={<ExistingToDosPage />} />
          <Route path="existing" element={<ExistingToDosPage />}>
            <Route path=":listName" element={<RenderSingleToDoPage />} />
          </Route>
          <Route index path="new" element={<CreateNewToDoListPage />} />
        </Routes>
      </div>
    );
  }
}
