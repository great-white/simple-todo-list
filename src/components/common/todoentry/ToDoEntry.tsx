import React, { Component } from "react";
import CheckBox, { CheckBoxProps } from "../checkbox/CheckBox";
import EntryText, { EntryTextProps } from "../entrytext/EntryText";

export type ToDoEntryProps = CheckBoxProps & EntryTextProps;

export default function ToDoEntry(props: ToDoEntryProps) {
  return (
    <div>
      <CheckBox {...props} />
      <EntryText {...props} />
    </div>
  );
}
