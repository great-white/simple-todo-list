import { useParams } from "react-router-dom";
import React from "react";
import ExistingSingleToDoPage from "./ExistingSingleToDoPage";

type RenderSingleToDoPageParams = {
  listName: string;
};

export const RenderSingleToDoPage = () => {
  const { listName } = useParams<RenderSingleToDoPageParams>();

  if (!listName) throw Error;
  return <ExistingSingleToDoPage name={listName} />;
};
