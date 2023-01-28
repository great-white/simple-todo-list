import React, { Component } from "react";
import Button from "../button/Button";
import CheckBox, { CheckBoxProps } from "../checkbox/CheckBox";
import EntryText, { EntryTextProps } from "../entrytext/EntryText";

export type ToDoEntryProps = CheckBoxProps &
  EntryTextProps & {
    handleOnButtonClick: (
      event: React.MouseEvent<HTMLButtonElement>,
      id: string
    ) => void;
  };

export default function ToDoEntry(props: ToDoEntryProps) {
  return (
    <div>
      <CheckBox {...props} />
      <EntryText {...props} />
      <Button
        id={props.id}
        name="Remove"
        type="secondary"
        isDisabled={false}
        handleOnButtonClickWithEvent={props.handleOnButtonClick}
      />
    </div>
  );
}
