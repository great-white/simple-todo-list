import React from "react";

export type CheckBoxProps = {
  isChecked: boolean;
  handleOnCheckBoxChange: React.ChangeEventHandler<HTMLInputElement>;
};

function CheckBox(props: CheckBoxProps) {
  const { isChecked, handleOnCheckBoxChange } = props;
  return (
    <input
      type={"checkbox"}
      checked={isChecked}
      onChange={handleOnCheckBoxChange}
    />
  );
}

export default CheckBox;
