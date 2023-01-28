import React from "react";

export type ButtonProps = {
  name: string;
  isDisabled: boolean;
  handleOnButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Button(props: ButtonProps) {
  const { name, isDisabled, handleOnButtonClick } = props;
  return (
    <button disabled={isDisabled} onClick={handleOnButtonClick}>
      {name}
    </button>
  );
}

export default Button;
