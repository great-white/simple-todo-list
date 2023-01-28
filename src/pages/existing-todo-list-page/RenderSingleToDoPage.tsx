import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleToDoListPage from "./SingleToDoListPage";
import "./RenderSingleToDoPage.css";

type RenderSingleToDoPageProps = {};

type ParamsType = {
  listName: string;
};

function RenderSingleToDoPage(props: RenderSingleToDoPageProps) {
  const { listName } = useParams<ParamsType>();

  useEffect(() => {
    console.log(`RenderSingleToDoPage ${listName}`);
  });

  if (!listName) throw Error("listName should be present");
  return (
    <div className="todo-entries">
      <SingleToDoListPage listName={listName} />
    </div>
  );
}

export default RenderSingleToDoPage;
