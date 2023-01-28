import React, { useEffect, useState } from "react";
import Button from "../../components/common/button/Button";
import ToDoEntry from "../../components/common/todo-entry/ToDoEntry";
import { ToDoEntriesType, ToDoEntryType } from "../../types/ToDoEntry";
import uuid from "react-uuid";

type SingleToDoListPageProps = {
  listName: string;
};

function SingleToDoListPage(props: SingleToDoListPageProps) {
  const { listName } = props;
  const [entries, setEntries] = useState<ToDoEntriesType>([]);

  // Will be called only once.
  useEffect(() => {
    const jsonItems = localStorage.getItem(listName);
    const items: ToDoEntriesType = jsonItems ? JSON.parse(jsonItems) : [];
    setEntries(items);
  }, []);

  const handleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        return {
          ...entry,
          isDone: event.target.checked,
        };
      } else {
        return {
          ...entry,
        };
      }
    });

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
    const newEntry: ToDoEntryType = {
      id: uuid(),
      isDone: false,
      value: "",
    };

    setEntries([...entries, newEntry]);
  };

  return (
    <div>
      {todoEntries}
      <Button
        name="Add"
        isDisabled={false}
        handleOnButtonClick={handleOnAddButtonClick}
      />
    </div>
  );
}

export default SingleToDoListPage;
