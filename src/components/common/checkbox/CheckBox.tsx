import React, { Component } from "react";

export type CheckBoxProps = {
  isChecked: boolean;
  handleCheckBoxChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function CheckBox(props: CheckBoxProps) {
  const { isChecked, handleCheckBoxChange } = props;

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckBoxChange}
    />
  );
}
