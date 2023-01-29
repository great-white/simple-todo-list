import React from "react";
import CheckBox from "../../common/checkbox/CheckBox";
import CheckBoxWithId from "../../common/checkbox/CheckBoxWithId";

type DeletedToDoEntryProps = {
  id: string;
  value: string;
  isChecked: boolean;
  handleCheckBoxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
};

export default function DeletedToDoEntry(props: DeletedToDoEntryProps) {
  const { id, value, isChecked, handleCheckBoxChange } = props;
  return (
    <div>
      <CheckBoxWithId
        id={id}
        isChecked={isChecked}
        handleCheckBoxChange={handleCheckBoxChange}
      />
      <label>{value}</label>
    </div>
  );
}
