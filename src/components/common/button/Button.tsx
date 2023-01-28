import React from "react";
import "./Button.css";

type ButtonProps = {
  id?: string;
  name: string;
  type?: string;
  isDisabled: boolean;
  handleOnButtonClickWithEvent?: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => void;
  handleOnButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
};

function Button(props: ButtonProps) {
  const {
    id,
    name,
    type = "primary",
    isDisabled,
    handleOnButtonClickWithEvent,
    handleOnButtonClick,
  } = props;

  return id && handleOnButtonClickWithEvent ? (
    <button
      className={type}
      disabled={isDisabled}
      onClick={(event) => handleOnButtonClickWithEvent(event, id)}
    >
      {name}
    </button>
  ) : handleOnButtonClick ? (
    <button
      className={type}
      disabled={isDisabled}
      onClick={handleOnButtonClick}
    >
      {name}
    </button>
  ) : (
    <button />
  );
}

export default Button;
