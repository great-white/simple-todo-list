import React from "react";

export type InputWithIdProps = {
  id: string;
  value: string;
  handleOnInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
};

function InputWithId(props: InputWithIdProps) {
  const { id, value, handleOnInputChange } = props;
  return (
    <input
      type={"text"}
      value={value}
      onChange={(event) => handleOnInputChange(event, id)}
    />
  );
}

export default InputWithId;
