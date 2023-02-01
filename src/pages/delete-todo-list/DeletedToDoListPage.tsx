import React, { useEffect, useState } from "react";
import {
  getDeletedToDoLists,
  GetToDoListNamesResponse,
  restoreToDoLists,
} from "../../api/todoListNames";
import DeletedToDoEntry from "../../components/advanced/deleted-todo-entry/DeletedToDoEntry";
import Button from "../../components/common/button/Button";
import { ToDoListNameType } from "../../types/ToDoList";

type DeleteToDoEntryType = {
  isChecked: boolean;
  item: ToDoListNameType;
};

export default function DeletedToDoListPage() {
  const [entries, setEntries] = useState<DeleteToDoEntryType[]>([]);

  useEffect(() => {
    getDeletedToDoLists()
      .then((response: GetToDoListNamesResponse) => {
        const updateItems: DeleteToDoEntryType[] = response.items.map(
          (item) => {
            return {
              isChecked: false,
              item: item,
            };
          }
        );
        setEntries(updateItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ): void => {
    const updatedEntries = entries.map((entry) =>
      entry.item.id === id
        ? { ...entry, isChecked: event.target.checked }
        : { ...entry }
    );

    setEntries(updatedEntries);
  };

  const handleOnRestoreButtonClick = () => {
    const listsToRestore: string[] = entries
      .filter((entry) => entry.isChecked)
      .map((entry) => entry.item.name);
    restoreToDoLists(listsToRestore);

    const remainingEntries = entries.filter((entry) => !entry.isChecked);

    setEntries(remainingEntries);
  };

  const itemsToRender = entries.map((entry) => (
    <DeletedToDoEntry
      key={entry.item.id}
      id={entry.item.id}
      isChecked={entry.isChecked}
      value={entry.item.name}
      handleCheckBoxChange={handleCheckBoxChange}
    />
  ));

  return (
    <div>
      <h2>Deleted ToDo Lists</h2>
      {itemsToRender}
      <hr />
      <Button
        name="Restore"
        isDisabled={false}
        handleOnButtonClick={handleOnRestoreButtonClick}
      />
    </div>
  );
}
