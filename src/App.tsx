import React from "react";
import "./App.css";
import Button from "./components/common/button/Button";
import CheckBox from "./components/common/checkbox/CheckBox";
import ToDoEntry from "./components/common/todoentry/ToDoEntry";
import ToDoEntries from "./components/existingtodopage/todoentries/ToDoEntries";

function App() {
  const todoEntry1 = (
    <ToDoEntry
      isChecked={false}
      handleCheckBoxChange={() => console.log("CheckBox state changed")}
      value={"Monkey pitayi"}
      handleOnEntryTextChange={() => console.log("Input changed")}
    />
  );
  return (
    <div className="App">
      <h1>App</h1>

      {todoEntry1}
    </div>
  );
}

export default App;
