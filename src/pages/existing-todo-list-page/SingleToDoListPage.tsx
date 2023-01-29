import React, { useEffect, useState } from "react";
import Button from "../../components/common/button/Button";
import ToDoEntry from "../../components/common/todo-entry/ToDoEntry";
import {
  createToDoEntry,
  ToDoEntriesType,
  ToDoEntryType,
} from "../../types/ToDoEntry";
import { useNavigate } from "react-router-dom";
import {
  getToDoEntries,
  GetToDoEntriesResponse,
  saveToDoEntries,
  SaveToDoEntriesResponse,
} from "../../api/todoEntries";

type SingleToDoListPageProps = {
  listName: string;
};

function SingleToDoListPage(props: SingleToDoListPageProps) {
  const navigate = useNavigate();

  const { listName } = props;
  const [entries, setEntries] = useState<ToDoEntriesType>([]);

  // Will be called only once.
  useEffect(() => {
    getToDoEntries(listName)
      .then((response: GetToDoEntriesResponse) => {
        setEntries(response.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newEntries = entries.map((entry) =>
      entry.id === id
        ? { ...entry, isDone: event.target.checked }
        : { ...entry }
    );

    setEntries(newEntries);
  };

  const handleOnInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newEntries = entries.map((entry) =>
      entry.id === id ? { ...entry, value: event.target.value } : { ...entry }
    );

    setEntries(newEntries);
  };

  const handleOnRemoveButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    const newEntries = entries.filter((entry) => entry.id !== id);
    setEntries(newEntries);
  };

  const todoEntries = entries.map((entry) => (
    <ToDoEntry
      key={entry.id}
      id={entry.id}
      isChecked={entry.isDone}
      value={entry.value}
      handleCheckBoxChange={handleCheckBoxChange}
      handleOnInputChange={handleOnInputChange}
      handleOnButtonClick={handleOnRemoveButtonClick}
    />
  ));

  const handleOnAddButtonClick = () => {
    const newEntry: ToDoEntryType = createToDoEntry("", false);
    setEntries([...entries, newEntry]);
  };

  const handleOnSaveButtonClick = () => {
    console.log("save the todo list");
    saveToDoEntries(listName, entries)
      .then((response: SaveToDoEntriesResponse) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnDeleteButtonClick = () => {
    console.log("Delete the todo list.");
  };

  return (
    <div>
      {todoEntries}
      <Button
        name="Add"
        isDisabled={false}
        handleOnButtonClick={handleOnAddButtonClick}
      />
      <hr />
      <Button
        name="Go Back"
        isDisabled={false}
        handleOnButtonClick={() => navigate(-1)}
      />
      <Button
        name="Save"
        isDisabled={false}
        handleOnButtonClick={handleOnSaveButtonClick}
      />
      <Button
        name="Delete"
        isDisabled={false}
        handleOnButtonClick={handleOnDeleteButtonClick}
      />
    </div>
  );
}

export default SingleToDoListPage;
