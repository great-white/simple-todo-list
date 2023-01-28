import React, { useEffect, useState } from "react";
import {
  ToDoListNamesType,
  ToDoListNameType,
  TODO_LIST_NAMES_KEY,
} from "../../types/ToDoList";
import { Link } from "react-router-dom";

type ExistingToDoListsPageProps = {};

function ExistingToDoListsPage(props: ExistingToDoListsPageProps) {
  const [listNames, setListNames] = useState<ToDoListNamesType>([]);

  useEffect(() => {
    const jsonItems = localStorage.getItem(TODO_LIST_NAMES_KEY);
    const items: ToDoListNamesType = jsonItems ? JSON.parse(jsonItems) : [];
    setListNames(items);
  }, []);

  const createToDoLink = (item: ToDoListNameType) => {
    return (
      <li key={item.id}>
        <Link to={`/existing/${item.name}`}>{item.name}</Link>
      </li>
    );
  };

  const createToDoLinks = (items: ToDoListNamesType) => {
    const todoLinks = items.map((item) => createToDoLink(item));
    return <ol>{todoLinks}</ol>;
  };

  return (
    <div>
      <h2>Existing ToDo Lists</h2>
      {createToDoLinks(listNames)}
    </div>
  );
}

export default ExistingToDoListsPage;
