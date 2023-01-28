import React, { Component } from "react";

export type EntryTextProps = {
  id?: string;
  value: string;
  handleOnEntryTextChangeWithId?: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleOnEntryTextChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function EntryText(props: EntryTextProps) {
  const { id, value, handleOnEntryTextChangeWithId, handleOnEntryTextChange } =
    props;

  return id && handleOnEntryTextChangeWithId ? (
    <input
      type={"text"}
      value={value}
      onChange={(event) => handleOnEntryTextChangeWithId(event, id)}
    />
  ) : handleOnEntryTextChange ? (
    <input type={"text"} value={value} onChange={handleOnEntryTextChange} />
  ) : (
    <input type={"text"} />
  );
}
