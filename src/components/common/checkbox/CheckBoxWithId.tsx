import React from "react";

export type CheckBoxWithIdProps = {
  id: string;
  isChecked: boolean;
  handleCheckBoxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
};

function CheckBoxWithId(props: CheckBoxWithIdProps) {
  const { id, isChecked, handleCheckBoxChange } = props;
  return (
    <input
      type={"checkbox"}
      checked={isChecked}
      onChange={(event) => handleCheckBoxChange(event, id)}
    />
  );
}

export default CheckBoxWithId;
