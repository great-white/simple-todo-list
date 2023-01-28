import React from "react";
import ButtonWithId from "../button/ButtonWithId";
import CheckBoxWithId, {
  CheckBoxWithIdProps,
} from "../checkbox/CheckBoxWithId";
import InputWithId, { InputWithIdProps } from "../input/InputWithId";

type ToDoEntryProps = CheckBoxWithIdProps &
  InputWithIdProps & {
    handleOnButtonClick: (
      event: React.MouseEvent<HTMLButtonElement>,
      id: string
    ) => void;
  };

function ToDoEntry(props: ToDoEntryProps) {
  return (
    <div>
      <CheckBoxWithId {...props} />
      <InputWithId {...props} />
      <ButtonWithId
        id={props.id}
        name={"Remove"}
        isDisabled={false}
        handleOnButtonClick={props.handleOnButtonClick}
      />
    </div>
  );
}

export default ToDoEntry;
