import React from "react";

export type CheckBoxProps = {
  id: string;
  isChecked: boolean;
  handleCheckBoxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
};

export default function CheckBox(props: CheckBoxProps) {
  const { id, isChecked, handleCheckBoxChange } = props;

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={(event) => handleCheckBoxChange(event, id)}
    />
  );
}
