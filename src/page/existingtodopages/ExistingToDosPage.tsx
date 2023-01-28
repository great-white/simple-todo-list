import React, { Component } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { ToDoListName, TODO_LIST_NAMES } from "../../api/model/ToDoList";
import ExistingSingleToDoPage from "./ExistingSingleToDoPage";

type ExistingToDosPageProps = {};

type ExistingToDosPageState = {
  todoListNames: ToDoListName[];
};

export default class ExistingToDosPage extends Component<
  ExistingToDosPageProps,
  ExistingToDosPageState
> {
  constructor(props: ExistingToDosPageProps) {
    super(props);

    this.state = {
      todoListNames: [],
    };
  }

  getNamesFromLocalStorage = (): ToDoListName[] => {
    const itemNames = localStorage.getItem(TODO_LIST_NAMES);
    return itemNames ? JSON.parse(itemNames) : [];
  };

  componentDidMount(): void {
    const itemNames: ToDoListName[] = this.getNamesFromLocalStorage();
    this.setState({
      todoListNames: itemNames,
    });
  }

  createToDoLink = (id: string, name: string) => (
    <li key={id}>
      <Link to={`${name}`}>{name}</Link>
    </li>
  );

  createToDoLinks = () => {
    const { todoListNames } = this.state;
    const todoLinks = todoListNames.map((name) =>
      this.createToDoLink(name.id, name.listName)
    );
    return (
      <nav>
        <ol>{todoLinks}</ol>
      </nav>
    );
  };

  createToDoRoute = (id: string, name: string) => (
    <Route
      key={id}
      path={`${name}`}
      element={<ExistingSingleToDoPage name={name} />}
    />
  );

  createToDoRoutes = () => {
    const { todoListNames } = this.state;
    const routes = todoListNames.map((name) =>
      this.createToDoRoute(name.id, name.listName)
    );
    return <Routes>{routes}</Routes>;
  };

  render() {
    const links = this.createToDoLinks();
    const routes = this.createToDoRoutes();
    return (
      <div>
        {links}
        <hr />
        <Outlet />
      </div>
    );
  }
}
