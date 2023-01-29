import React, { useEffect, useState } from "react";
import {
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

  const handleOnCreateButtonClick = () => {
    // Perform API call.
    saveToDoListName(name)
      .then((response: SaveToDoListNameResponse) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
