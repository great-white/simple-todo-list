import React, { Component } from "react";
import {
  createIdForToDoListName,
  ToDoListName,
  TODO_LIST_NAMES,
} from "../../api/model/ToDoList";
import Button from "../../components/common/button/Button";
import EntryText from "../../components/common/entrytext/EntryText";

type CreateNewToDoListPageProps = {};

type CreateNewToDoListPageState = {
  todoListNames: ToDoListName[];
  listName: string;
};

export default class CreateNewToDoListPage extends Component<
  CreateNewToDoListPageProps,
  CreateNewToDoListPageState
> {
  constructor(props: CreateNewToDoListPageProps) {
    super(props);

    this.state = {
      todoListNames: [],
      listName: "",
    };
  }

  handleOnEntryTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      listName: event.target.value,
    });
  };

  isButtonDisabled = () => this.state.listName.length === 0;

  handleOnButtonClick = () => {
    const updatedListNames = this.state.todoListNames;
    const newListName: ToDoListName = {
      id: createIdForToDoListName(),
      listName: this.state.listName,
    };
    updatedListNames.push(newListName);
    this.setState({
      listName: "",
      todoListNames: updatedListNames,
    });

    this.saveToLocalStorage();

    console.log(this.state.todoListNames);
  };

  saveToLocalStorage = () => {
    localStorage.setItem(
      TODO_LIST_NAMES,
      JSON.stringify(this.state.todoListNames)
    );
  };

  getFromLocalStorage = (): ToDoListName[] => {
    const items = localStorage.getItem(TODO_LIST_NAMES);
    return items ? JSON.parse(items) : [];
  };

  componentDidMount = () => {
    this.setState({
      todoListNames: this.getFromLocalStorage(),
    });
  };

  render() {
    const { listName } = this.state;
    return (
      <div>
        <h2>Enter name of your new todo list</h2>
        <EntryText
          value={listName}
          handleOnEntryTextChange={this.handleOnEntryTextChange}
        />{" "}
        <Button
          name="Create"
          isDisabled={this.isButtonDisabled()}
          handleOnButtonClick={this.handleOnButtonClick}
        />
      </div>
    );
  }
}
