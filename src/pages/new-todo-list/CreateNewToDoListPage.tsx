import React, { useState } from "react";
import {
  getToDoListNames,
  GetToDoListNamesResponse,
  saveToDoListName,
  SaveToDoListNameResponse,
} from "../../api/todoListNames";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";

type CreateNewToDoListPageProps = {};

function CreateNewToDoListPage(props: CreateNewToDoListPageProps) {
  const [name, setName] = useState<string>("");

  const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const saveList = () => {
    // Perform API call.
    saveToDoListName(name)
      .then((response: SaveToDoListNameResponse) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOnCreateButtonClick = () => {
    getToDoListNames()
      .then((response: GetToDoListNamesResponse) => {
        const listNames = response.items.map((item) => item.name);
        if (listNames.includes(name)) {
          alert("Duplicate name cannot be used. Please select another name.");
        } else {
          saveList();
          setName("");
        }
      })
      .catch((error) => {});
  };

  return (
    <div>
      <h2>Create new ToDo List</h2>
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
