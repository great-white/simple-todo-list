import React, { Component } from "react";
import { getToDoEntries } from "../../api/getToDoEntries";
import { ToDoEntries, ToDoEntry } from "../../api/model/ToDoEntry";
import Button from "../../components/common/button/Button";
import ToDoEntryTag from "../../components/common/todoentry/ToDoEntry";
import uuid from "react-uuid";

type ExistingSingleToDoPageProps = {
  name: string;
};

type ExistingSingleToDoPageState = {
  todoEntries: ToDoEntries;
};

export default class ExistingSingleToDoPage extends Component<
  ExistingSingleToDoPageProps,
  ExistingSingleToDoPageState
> {
  constructor(props: ExistingSingleToDoPageProps) {
    super(props);

    this.state = {
      todoEntries: [],
    };
  }

  saveStateToLocalStorage = (): void => {
    localStorage.setItem(
      this.props.name,
      JSON.stringify(this.state.todoEntries)
    );

    console.log(localStorage);
  };

  getStateFromLocalStorage = (): ToDoEntries => {
    const items = localStorage.getItem(this.props.name);
    return items ? JSON.parse(items) : [];
  };

  componentDidMount(): void {
    // API call to fetch the current entries
    const entries = this.getStateFromLocalStorage();
    this.setState({
      todoEntries: entries,
    });
  }

  handleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const updatedEntries = this.state.todoEntries;
    updatedEntries.forEach((entry) => {
      if (entry.id === id) entry.isChecked = event.target.checked;
    });

    this.setState({
      todoEntries: updatedEntries,
    });
  };

  handleOnEntryTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const updatedEntries = this.state.todoEntries;
    updatedEntries.forEach((entry) => {
      if (entry.id === id) entry.name = event.target.value;
    });

    this.setState({
      todoEntries: updatedEntries,
    });
  };

  handleOnRemoveButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    const updatedEntries = this.state.todoEntries.filter(
      (entry) => entry.id !== id
    );
    this.setState({
      todoEntries: updatedEntries,
    });
  };

  createToDoEntryTag = (todoEntry: ToDoEntry) => (
    <ToDoEntryTag
      id={todoEntry.id}
      key={todoEntry.id}
      isChecked={todoEntry.isChecked}
      handleCheckBoxChange={this.handleCheckBoxChange}
      value={todoEntry.name}
      handleOnEntryTextChangeWithId={this.handleOnEntryTextChange}
      handleOnButtonClick={this.handleOnRemoveButtonClick}
    />
  );

  handleOnAddButtonClick = () => {
    const newToDoEntry: ToDoEntry = {
      id: uuid(),
      isChecked: false,
      name: "",
    };

    const updatedEntries = this.state.todoEntries;
    updatedEntries.push(newToDoEntry);

    this.setState({
      todoEntries: updatedEntries,
    });
  };

  handleOnSaveButtonClick = () => {
    console.log("Save button clicked.");
    this.saveStateToLocalStorage();
  };

  handleOnDeleteButtonClick = () => {
    console.log("Delete button clicked.");
  };

  render() {
    const { name } = this.props;
    const { todoEntries } = this.state;
    const todoEntriesToRender = todoEntries?.map((todoEntry) =>
      this.createToDoEntryTag(todoEntry)
    );

    return (
      <div>
        <h1>{name}</h1>
        {todoEntriesToRender}
        <Button
          name="Add"
          isDisabled={false}
          handleOnButtonClick={this.handleOnAddButtonClick}
        />
        <hr />
        <Button
          name="Save"
          isDisabled={false}
          handleOnButtonClick={this.handleOnSaveButtonClick}
        />{" "}
        <Button
          name="Delete"
          isDisabled={false}
          handleOnButtonClick={this.handleOnDeleteButtonClick}
        />
      </div>
    );
  }
}
