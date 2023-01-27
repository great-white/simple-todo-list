import React, { Component } from "react";

export type EntryTextProps = {
  value: string;
  handleOnEntryTextChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function EntryText(props: EntryTextProps) {
  const { value, handleOnEntryTextChange } = props;
  return (
    <input type={"text"} value={value} onChange={handleOnEntryTextChange} />
  );
}
