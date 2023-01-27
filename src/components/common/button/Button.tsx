import React from "react";
import "./Button.css";

type ButtonProps = {
  name: string;
  type: string;
  isDisabled: boolean;
  handleOnButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Button(props: ButtonProps) {
  const { name, type = "primary", isDisabled, handleOnButtonClick } = props;
  return (
    <button
      className={type}
      disabled={isDisabled}
      onClick={handleOnButtonClick}
    >
      {name}
    </button>
  );
}

export default Button;
