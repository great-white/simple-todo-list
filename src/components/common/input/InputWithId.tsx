import React from "react";

export type InputWithIdProps = {
  id: string;
  value: string;
  handleOnChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
};

function InputWithId(props: InputWithIdProps) {
  const { id, value, handleOnChange } = props;
  return (
    <input
      type={"text"}
      value={value}
      onChange={(event) => handleOnChange(event, id)}
    />
  );
}

export default InputWithId;
