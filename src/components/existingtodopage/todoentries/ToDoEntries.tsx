import React, { Component } from "react";
import ToDoEntry, { ToDoEntryProps } from "../../common/todoentry/ToDoEntry";

export type ToDoEntriesProps = {
  todoEntries: ToDoEntryProps[];
};

export default function ToDoEntries(props: ToDoEntriesProps) {
  const todoEntries = props.todoEntries.map((todoEntry) => (
    <ToDoEntry {...todoEntry} />
  ));

  return <div>{todoEntries}</div>;
}
