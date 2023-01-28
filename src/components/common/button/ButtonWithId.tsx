import React from "react";

export type ButtonWithIdProps = {
  id: string;
  name: string;
  isDisabled: boolean;
  handleOnButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => void;
};

function ButtonWithId(props: ButtonWithIdProps) {
  const { id, name, isDisabled, handleOnButtonClick } = props;
  return (
    <button
      disabled={isDisabled}
      onClick={(event) => handleOnButtonClick(event, id)}
    >
      {name}
    </button>
  );
}

export default ButtonWithId;
