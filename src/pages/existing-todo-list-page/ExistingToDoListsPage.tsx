import React, { useEffect, useState } from "react";
import { ToDoListNamesType, ToDoListNameType } from "../../types/ToDoList";
import { Link } from "react-router-dom";
import {
  getToDoListNames,
  GetToDoListNamesResponse,
} from "../../api/todoListNames";

type ExistingToDoListsPageProps = {};

function ExistingToDoListsPage(props: ExistingToDoListsPageProps) {
  const [listNames, setListNames] = useState<ToDoListNamesType>([]);

  useEffect(() => {
    getToDoListNames()
      .then((response: GetToDoListNamesResponse) => {
        setListNames(response.items);
      })
      .catch((error) => {
        console.log(error);
      });
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
