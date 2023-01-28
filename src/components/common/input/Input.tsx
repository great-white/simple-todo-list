import React from "react";

export type InputProps = {
  value: string;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Input(props: InputProps) {
  const { value, handleOnChange } = props;
  return <input type={"text"} value={value} onChange={handleOnChange} />;
}

export default Input;
