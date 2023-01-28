import React, { useEffect, useState } from "react";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
import {
  createToDoListName,
  ToDoListNamesType,
  TODO_LIST_NAMES_KEY,
} from "../../types/ToDoList";

type CreateNewToDoListPageProps = {};

function CreateNewToDoListPage(props: CreateNewToDoListPageProps) {
  const initialListNames = () => {
    const jsonItems = localStorage.getItem(TODO_LIST_NAMES_KEY);
    const items = jsonItems ? JSON.parse(jsonItems) : [];
    return items;
  };

  const [listNames, setListNames] = useState<ToDoListNamesType>(() =>
    initialListNames()
  );
  const [name, setName] = useState<string>("");

  const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleOnCreateButtonClick = () => {
    setListNames([...listNames, createToDoListName(name)]);
  };

  useEffect(() => {
    setName("");
    localStorage.setItem(TODO_LIST_NAMES_KEY, JSON.stringify(listNames));
    console.log(localStorage);
  }, [listNames]);

  return (
    <div>
      <Input value={name} handleOnChange={handleOnNameChange} />{" "}
      <Button
        name="Create List"
        isDisabled={name.length === 0}
        handleOnButtonClick={handleOnCreateButtonClick}
      />
    </div>
  );
}

export default CreateNewToDoListPage;
